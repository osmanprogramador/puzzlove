const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '../public/filme');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const html = read('index.html');
const database = vm.runInNewContext(read('database.js') + '; MOVIE_DATABASE');

// Small DOM fixture for deterministic event and image-completion ordering.
// Browser layout, focus and images are also checked in the live local preview.
// Existing regression cases exercise the immediate-scoring mode explicitly.
function setup({ storageBlocked = false, mode = 'immediate' } = {}) {
  const elements = {}, images = [], timers = new Map();
  let focus, timerId = 0;
  class Element {
    constructor(id = '') {
      this.id = id; this.dataset = {}; this.style = {}; this.attributes = {};
      this.children = []; this.listeners = {}; this.value = ''; this.textContent = '';
      this.disabled = false; this.inert = false; this.open = false; this.classes = new Set();
      this.classList = {
        add: (...names) => names.forEach(n => this.classes.add(n)),
        remove: (...names) => names.forEach(n => this.classes.delete(n)),
        contains: n => this.classes.has(n),
        toggle: (n, on = !this.classes.has(n)) => on ? this.classes.add(n) : this.classes.delete(n)
      };
    }
    set className(value) { this.classes = new Set(value.split(' ')); }
    get className() { return [...this.classes].join(' '); }
    setAttribute(key, value) { this.attributes[key] = String(value); }
    removeAttribute(key) { delete this.attributes[key]; }
    addEventListener(name, callback) { this.listeners[name] = callback; }
    replaceChildren(...children) { this.children = children; }
    appendChild(child) { this.children.push(child); }
    querySelectorAll() { return this.children; }
    querySelector(selector) { const n = selector.match(/data-rounds="(\d+)"/)?.[1]; return this.children.find(c => c.dataset.rounds === n); }
    focus() { focus = this; }
    closest() { return this; }
    fire(name = 'click', event = {}) { this.listeners[name]?.({target: this, ...event}); }
  }
  for (const match of html.matchAll(/id="([^"]+)"/g)) elements[match[1]] = new Element(match[1]);
  elements['scoring-mode'].value = mode;
  for (const match of html.matchAll(/data-category="([^"]+)"[^>]*>([^<]+)/g)) {
    const button = new Element(); button.dataset.category = match[1]; button.textContent = match[2];
    elements['categories-container'].appendChild(button);
  }
  const header = new Element('header');
  const context = vm.createContext({
    document: {
      get activeElement() { return focus; },
      getElementById(id) { assert(elements[id], `missing HTML element: ${id}`); return elements[id]; },
      querySelector(selector) { assert.equal(selector, '.app-header'); return header; },
      createElement() { return new Element(); }, addEventListener(name, callback) { callback(); }
    }, window: {}, console, confirm: () => true,
    localStorage: {getItem() { if (storageBlocked) throw Error('blocked'); return 'true'; }, setItem() { if (storageBlocked) throw Error('blocked'); }},
    Image: class { constructor() { images.push(this); } },
    setTimeout(callback, delay) { const id = ++timerId; timers.set(id, {callback, delay}); return id; },
    clearTimeout(id) { timers.delete(id); }
  });
  vm.runInContext(read('database.js'), context);
  vm.runInContext(read('app.js'), context);
  return {
    elements, images, header, timers,
    click(id) { elements[id].fire(); },
    ready() { images.at(-1).onload(); },
    category(category) { const button = elements['categories-container'].children.find(b => b.dataset.category === category); assert(button); elements['categories-container'].fire('click', {target:button}); },
    rounds(count) { const button = elements['rounds-container'].children.find(b => Number(b.dataset.rounds) === count); assert(button); elements['rounds-container'].fire('click', {target:button}); },
    focused() { return focus; }
  };
}

test('expanded catalog: original titles preserved, Christmas and personal titles have six local image stages', () => {
  assert(database.length >= 110);
  for (const id of ['sci_01', 'sci_02', 'sci_03', 'anim_01', 'anim_02', 'anim_03', 'act_01', 'act_02', 'cl_01', 'cl_02', 'ser_01', 'com_01', 'com_02']) assert(database.some(m => m.id === id), id);
  assert(database.filter(m => m.category === 'natal').length >= 20);
  for (const title of ['Chaves', 'Brooklyn Nine-Nine', 'Ted Lasso', 'Silo', 'Esqueceram de Mim', 'Klaus']) assert(database.some(m => m.title === title), title);
  assert.equal(database.filter(m => m.title === 'Breaking Bad').length, 1);
  assert.equal(new Set(database.map(m => m.id)).size, database.length);
  for (const movie of database) {
    assert.equal(typeof movie.synopsis, 'string'); assert(movie.synopsis.length >= 80, movie.title);
    assert.notEqual(movie.category, 'terror'); assert.notEqual(movie.id, 'ser_02');
    assert.equal(movie.stages.length, 6);
    for (const [i, stage] of movie.stages.entries()) {
      assert.equal(stage.step, i + 1); assert.equal(stage.points, 6 - i);
      assert(stage.alt); const bytes = fs.readFileSync(path.join(root, stage.image));
      assert(bytes.length > 1000); assert.equal(bytes.readUInt16BE(0), 0xffd8);
    }
  }
  assert(!html.includes('data-category="terror"'));
});

test('category limits never overwrite the preferred round count', () => {
  const t = setup(); t.category('animacao'); t.click('btn-start-game');
  const available = Math.min(10, database.filter(m => m.category === 'animacao').length);
  assert.equal(t.elements['badge-round'].textContent, `RODADA 01 / ${String(available).padStart(2, '0')}`);
  t.click('btn-home'); t.category('todos');
  assert.match(t.elements['catalog-status'].textContent, /10 rodadas/);
  t.click('btn-start-game'); assert.equal(t.elements['badge-round'].textContent, 'RODADA 01 / 10');
});

test('reviewing an unlocked image does not lower or restore available points', () => {
  const t = setup(); t.click('btn-start-game'); t.ready();
  t.click('btn-next-stage'); t.ready(); t.click('btn-prev-frame'); t.ready();
  assert.match(t.elements['badge-current-points'].textContent, /5/);
  t.click('btn-next-stage'); t.ready();
  assert.match(t.elements['badge-stage-number'].textContent, /02/);
  assert.match(t.elements['badge-current-points'].textContent, /5/);
  t.click('btn-judge-both'); t.click('btn-judge-both');
  assert.equal(t.elements['display-p1-score'].textContent, 5);
  assert.equal(t.elements['display-p2-score'].textContent, 5);
});

test('out-of-order load and error events cannot overwrite the displayed frame', () => {
  const t = setup(); t.click('btn-start-game'); t.ready();
  t.click('btn-next-stage'); const stale = t.images.at(-1);
  t.elements['stages-stepper'].children[0].fire(); const latest = t.images.at(-1);
  latest.onload(); stale.onload(); stale.onerror();
  assert.equal(t.elements['current-frame-img'].src, latest.src);
  assert.equal(t.elements['current-frame-img'].style.display, 'block');
  assert.equal(t.elements['frame-placeholder'].style.display, 'none');
});

test('reveal closes scoring, cancels old image callbacks and locks background focus', () => {
  const t = setup(); t.click('btn-start-game'); const old = t.images.at(-1);
  t.click('btn-show-answer-direct'); t.click('btn-judge-p1'); old.onload();
  assert.equal(t.elements['display-p1-score'].textContent, 0);
  assert(t.header.inert); assert(t.elements['screen-game'].inert);
  assert.equal(t.focused().id, 'btn-modal-next');
  t.click('btn-modal-next'); t.click('btn-modal-next');
  assert.equal(t.elements['badge-round'].textContent, 'RODADA 02 / 10');
  assert(!t.header.inert); assert.equal(t.focused().id, 'display-initial-hint');
});

test('no score while loading; failed images provide a playable text fallback', () => {
  const t = setup(); t.click('btn-start-game'); t.click('btn-judge-p1');
  assert.equal(t.elements['display-p1-score'].textContent, 0);
  t.images.at(-1).onerror();
  assert.equal(t.elements['placeholder-title'].textContent, 'PISTA EM TEXTO');
  assert(!t.elements['btn-judge-p1'].disabled);
  t.click('btn-judge-p1'); assert.equal(t.elements['display-p1-score'].textContent, 6);
});

test('image timeout also enables the fallback and ignores a late success', () => {
  const t = setup(); t.click('btn-start-game');
  [...t.timers.values()].find(timer => timer.delay === 10000).callback();
  t.images.at(-1).onload();
  assert.equal(t.elements['placeholder-title'].textContent, 'PISTA EM TEXTO');
  assert.equal(t.elements['current-frame-img'].style.display, 'none');
});

test('six stages without success end the round with zero points', () => {
  const t = setup(); t.category('series'); t.click('btn-start-game');
  for (let i = 0; i < 6; i++) { t.ready(); t.click('btn-judge-none'); }
  assert.equal(t.elements['display-p1-score'].textContent, 0);
  while (!t.elements['btn-modal-next'].textContent.includes('RESULTADO FINAL')) {
    t.click('btn-modal-next'); t.click('btn-show-answer-direct');
  }
  t.click('btn-modal-next'); assert(t.elements['screen-victory'].classList.contains('active'));
  assert.equal(t.elements['victory-title'].textContent, 'EMPATE!');
});

test('five-round match reaches victory and rematch resets scores and round', () => {
  const t = setup(); t.rounds(5); t.click('btn-start-game');
  const titles = new Set();
  for (let i = 0; i < 5; i++) {
    t.ready(); t.click('btn-judge-p1'); titles.add(t.elements['modal-movie-title'].textContent); t.click('btn-modal-next');
  }
  assert.equal(titles.size, 5);
  assert(t.elements['screen-victory'].classList.contains('active'));
  assert.equal(t.elements['podium-points-p1'].textContent, 30);
  t.click('btn-rematch'); assert.equal(t.elements['display-p1-score'].textContent, 0);
  assert.equal(t.elements['badge-round'].textContent, 'RODADA 01 / 05');
});

test('Christmas filter plays its entire collection without repeats or titles from other categories', () => {
  const t = setup(); t.category('natal');
  const christmas = database.filter(m => m.category === 'natal');
  t.rounds(christmas.length); t.click('btn-start-game');
  const revealed = new Set();
  for (let i = 0; i < christmas.length; i++) {
    t.click('btn-show-answer-direct');
    const title = t.elements['modal-movie-title'].textContent;
    assert(christmas.some(m => m.title === title));
    revealed.add(title); t.click('btn-modal-next');
  }
  assert.equal(revealed.size, christmas.length);
  assert(t.elements['screen-victory'].classList.contains('active'));
});

test('synopses start collapsed for every round and answer; dialog keyboard focus includes the disclosure', () => {
  const t = setup(); t.click('btn-start-game'); t.ready();
  assert.equal(t.elements['game-synopsis'].open, false);
  const firstSynopsis = t.elements['game-synopsis-text'].textContent;
  t.elements['game-synopsis'].open = true;
  t.click('btn-judge-both');
  assert.equal(t.elements['display-p1-score'].textContent, 6);
  assert.equal(t.elements['modal-synopsis-text'].textContent, firstSynopsis);
  assert.equal(t.elements['modal-synopsis'].open, false);
  let trapped = false;
  t.elements['modal-answer'].fire('keydown', {key:'Tab', preventDefault(){trapped=true;}});
  assert(trapped); assert.equal(t.focused().id, 'modal-synopsis-toggle');
  t.elements['modal-answer'].fire('keydown', {key:'Tab',shiftKey:true, preventDefault(){}});
  assert.equal(t.focused().id, 'btn-modal-next');
  t.elements['modal-synopsis'].open = true;
  t.click('btn-modal-next');
  assert.equal(t.elements['game-synopsis'].open, false);
  assert.equal(t.elements['modal-synopsis'].open, false);
  assert.notEqual(t.elements['game-synopsis-text'].textContent, firstSynopsis);
  t.click('btn-show-answer-direct');
  assert.equal(t.elements['modal-synopsis'].open, false);
});

test('blocked localStorage does not prevent playing or toggling audio', () => {
  const t = setup({storageBlocked:true}); t.click('btn-sound-toggle'); t.click('btn-start-game'); t.ready();
  t.click('btn-judge-p2'); assert.equal(t.elements['display-p2-score'].textContent, 6);
});

function revealAll(t) {
  for (let i = 0; i < 6; i++) {
    t.ready();
    if (i < 5) t.click('btn-next-stage');
  }
  t.click('btn-show-answer-direct');
}
function chooseResults(t, p1, p2) {
  for (const [key, value] of [['p1', p1], ['p2', p2]]) {
    t.elements[`score-choice-${key}`].value = String(value);
    t.elements[`score-choice-${key}`].fire('change');
  }
}

test('final mode keeps answers and scores closed until all six images are ready', () => {
  const t = setup({mode:'final'}); t.click('btn-start-game');
  assert(t.elements['judge-instant-buttons'].hidden);
  for (let i = 0; i < 6; i++) {
    t.click('btn-show-answer-direct'); t.click('btn-judge-p1');
    assert(!t.elements['modal-answer'].classList.contains('active'));
    t.ready();
    if (i < 5) {
      assert(t.elements['btn-show-answer-direct'].disabled);
      t.click('btn-show-answer-direct');
      assert(!t.elements['modal-answer'].classList.contains('active'));
      t.click('btn-next-stage');
    }
  }
  assert.equal(t.elements['display-p1-score'].textContent, 0);
  t.click('btn-show-answer-direct');
  assert(t.elements['modal-answer'].classList.contains('active'));
  assert(!t.elements['deferred-score-panel'].hidden);
  assert.equal(t.focused().id, 'score-choice-p1');
  assert(t.elements['btn-modal-next'].disabled);
  t.click('btn-modal-next');
  assert.equal(t.elements['badge-round'].textContent, 'RODADA 01 / 10');
  chooseResults(t, 2, '');
  assert(t.elements['btn-modal-next'].disabled);
  chooseResults(t, 2, 5);
  assert(!t.elements['btn-modal-next'].disabled);
  assert.match(t.elements['deferred-score-preview'].textContent, /\+5 pontos.*\+2 pontos/);
  assert.equal(t.elements['display-p1-score'].textContent, 0);
  t.click('btn-modal-next'); t.click('btn-modal-next');
  assert.equal(t.elements['display-p1-score'].textContent, 5);
  assert.equal(t.elements['display-p2-score'].textContent, 2);
  assert.equal(t.elements['badge-round'].textContent, 'RODADA 02 / 10');
});

test('final mode scores all image positions and misses independently, reaches victory and resets on rematch', () => {
  const t = setup({mode:'final'}); t.rounds(5); t.click('btn-start-game');
  const results = [[2,5],[1,0],[6,6],[4,3],[0,0]];
  let p1=0,p2=0;
  for (const [a,b] of results) {
    revealAll(t);
    assert.equal(t.elements['score-choice-p1'].value, '');
    assert.equal(t.elements['score-choice-p2'].value, '');
    assert(t.elements['btn-modal-next'].disabled);
    chooseResults(t, a, b);
    t.click('btn-modal-next');
    p1+=a?7-a:0;p2+=b?7-b:0;
    assert.equal(t.elements['display-p1-score'].textContent,p1);
    assert.equal(t.elements['display-p2-score'].textContent,p2);
  }
  assert(t.elements['screen-victory'].classList.contains('active'));
  assert.equal(t.elements['podium-points-p1'].textContent, 15);
  assert.equal(t.elements['podium-points-p2'].textContent, 7);
  t.click('btn-rematch');
  assert.equal(t.elements['display-p1-score'].textContent, 0);
  assert(t.elements['judge-instant-buttons'].hidden);
  assert.equal(t.elements['badge-round'].textContent,'RODADA 01 / 05');
});

test('final-score dialog contains keyboard focus and rejects incomplete or invalid results', () => {
  const t = setup({mode:'final'}); t.click('btn-start-game'); revealAll(t);
  const modal = t.elements['modal-answer'];
  modal.fire('keydown',{key:'Tab',shiftKey:true,preventDefault(){}});
  assert.equal(t.focused().id,'modal-synopsis-toggle');
  modal.fire('keydown',{key:'Tab',preventDefault(){}});
  assert.equal(t.focused().id,'score-choice-p1');
  chooseResults(t, 99, 0); t.click('btn-modal-next');
  assert(modal.classList.contains('active'));
  assert.equal(t.elements['display-p1-score'].textContent,0);
  chooseResults(t, 0, 0);
  t.elements['btn-modal-next'].focus();
  modal.fire('keydown',{key:'Tab',preventDefault(){}});
  assert.equal(t.focused().id,'score-choice-p1');
  t.click('btn-modal-next');
  assert.equal(t.elements['display-p1-score'].textContent,0);
  assert.equal(t.elements['display-p2-score'].textContent,0);
  t.click('btn-home'); t.elements['scoring-mode'].value='immediate';
  t.click('btn-start-game'); t.ready(); t.click('btn-judge-p1');
  assert.equal(t.elements['display-p1-score'].textContent,6);
  assert(t.elements['deferred-score-panel'].hidden);
});
