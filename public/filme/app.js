// ==========================================================================
// CONTROLE DE JOGO - QUAL É O FILME? (STUDIO EDITION)
// 1 Dica de Abertura + 6 Frames de Cena (6 pts a 1 pt)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // ÁUDIO NATIVO DE ESTÚDIO (Web Audio API)
  // ------------------------------------------------------------------------
  let audioCtx = null;
  const storage = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, String(value)); } catch { /* Optional preference. */ } }
  };
  let isSoundMuted = storage.get('sound_muted') === 'true';

  function initAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
  }

  function playTone(freq, type = 'sine', duration = 0.12, gainValue = 0.08) {
    if (isSoundMuted) return;
    try {
      initAudioContext();
      if (!audioCtx) return;

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(gainValue, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Ignorar caso navegador restrinja
    }
  }

  const Sound = {
    click: () => playTone(540, 'sine', 0.06, 0.04),
    revealFrame: () => {
      playTone(400, 'triangle', 0.12, 0.07);
      setTimeout(() => playTone(600, 'triangle', 0.2, 0.07), 75);
    },
    pointScored: () => {
      playTone(523.25, 'sine', 0.09, 0.07);
      setTimeout(() => playTone(659.25, 'sine', 0.09, 0.07), 70);
      setTimeout(() => playTone(783.99, 'sine', 0.22, 0.09), 140);
    },
    answerReveal: () => {
      playTone(320, 'sine', 0.1, 0.06);
      setTimeout(() => playTone(440, 'sine', 0.18, 0.06), 90);
    },
    victory: () => {
      const notes = [440, 554.37, 659.25, 880];
      notes.forEach((freq, idx) => {
        setTimeout(() => playTone(freq, 'triangle', 0.3, 0.1), idx * 130);
      });
    }
  };

  // Botão de som com SVG
  const btnSoundToggle = document.getElementById('btn-sound-toggle');
  const svgSoundOn = document.getElementById('svg-sound-on');
  const svgSoundOff = document.getElementById('svg-sound-off');

  function updateSoundUI() {
    btnSoundToggle.setAttribute('aria-pressed', String(!isSoundMuted));
    btnSoundToggle.setAttribute('aria-label', isSoundMuted ? 'Ativar som' : 'Desativar som');
    if (svgSoundOn && svgSoundOff) {
      svgSoundOn.style.display = isSoundMuted ? 'none' : 'block';
      svgSoundOff.style.display = isSoundMuted ? 'block' : 'none';
    }
  }
  updateSoundUI();

  btnSoundToggle.addEventListener('click', () => {
    isSoundMuted = !isSoundMuted;
    storage.set('sound_muted', isSoundMuted);
    updateSoundUI();
    if (!isSoundMuted) Sound.click();
  });

  const $ = id => document.getElementById(id);
  const screens = { lobby: $('screen-lobby'), game: $('screen-game'), victory: $('screen-victory') };
  const modal = $('modal-answer');
  const state = {
    screen: 'lobby', selectedCategory: 'todos', requestedRounds: 10, totalRounds: 0,
    players: { p1: { name: 'Jogador 1', score: 0 }, p2: { name: 'Jogador 2', score: 0 } },
    deck: [], currentRoundIndex: 0, maxUnlockedStageIndex: 0, viewingStageIndex: 0,
    roundScored: false, answerRevealed: false, frameReady: false, scoringMode: 'final'
  };
  let frameRequest = 0;
  let frameTimer;
  const categoryButtons = [...$('categories-container').querySelectorAll('button')];
  const catalog = MOVIE_DATABASE;
  const poolFor = category => catalog.filter(movie => category === 'todos' || movie.category === category);
  const currentMovie = () => state.deck[state.currentRoundIndex];
  const currentPoints = () => Math.max(1, 6 - state.maxUnlockedStageIndex);
  const effectiveRounds = () => Math.min(state.requestedRounds, poolFor(state.selectedCategory).length);
  const pad = n => String(n).padStart(2, '0');
  const isPlaying = () => state.screen === 'game' && !state.answerRevealed && !state.roundScored && !modal.classList.contains('active');

  for (const key of ['p1', 'p2']) {
    const saved = storage.get(`movie_${key}_name`);
    if (saved) $(`input-${key}-name`).value = saved.slice(0, 15);
  }

  function setBackgroundInert(value) {
    for (const element of [document.querySelector('.app-header'), ...Object.values(screens)]) {
      element.inert = value;
      if (value) {
        element.setAttribute('inert', '');
        element.setAttribute('aria-hidden', 'true');
      } else {
        element.removeAttribute('inert');
        element.removeAttribute('aria-hidden');
      }
    }
  }

  function closeModal() {
    modal.classList.remove('active');
    $('modal-synopsis').open = false;
    setBackgroundInert(false);
  }

  function showScreen(key) {
    state.screen = key;
    for (const [name, screen] of Object.entries(screens)) screen.classList.toggle('active', name === key);
    $('btn-home').style.display = key === 'lobby' ? 'none' : 'flex';
    if (key === 'lobby') {
      ++frameRequest;
      clearTimeout(frameTimer);
      closeModal();
      renderLobby();
      $('btn-start-game').focus();
    } else if (key === 'game') {
      $('display-initial-hint').focus();
    } else {
      $('victory-title').focus();
    }
  }

  function renderLobby() {
    for (const button of categoryButtons) {
      button.dataset.label ||= button.textContent;
      const count = poolFor(button.dataset.category).length;
      button.textContent = `${button.dataset.label} (${count})`;
      button.disabled = count === 0;
      const selected = button.dataset.category === state.selectedCategory;
      button.classList.toggle('selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    }
    const count = poolFor(state.selectedCategory).length;
    const planned = effectiveRounds();
    const options = [...new Set([5, 10, 15, 20, 30, count, planned])].filter(n => n > 0 && n <= count).sort((a, b) => a - b);
    $('rounds-container').replaceChildren();
    for (const n of options) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'round-card';
      button.dataset.rounds = String(n);
      button.classList.toggle('selected', n === planned);
      button.setAttribute('aria-pressed', String(n === planned));
      button.setAttribute('aria-label', `${n} ${n === 1 ? 'título' : 'títulos'}`);
      button.innerHTML = `<span class="round-number">${pad(n)}</span><span class="round-text">${n === count ? 'TODOS' : 'TÍTULOS'}</span>`;
      $('rounds-container').appendChild(button);
    }
    $('btn-start-game').disabled = !count;
    $('catalog-status').textContent = `${count} ${count === 1 ? 'título disponível' : 'títulos disponíveis'}. Esta partida terá ${planned} ${planned === 1 ? 'rodada' : 'rodadas'}, sem repetir títulos.`;
  }

  $('categories-container').addEventListener('click', event => {
    const button = event.target.closest('.cat-pill');
    if (!button || button.disabled) return;
    state.selectedCategory = button.dataset.category;
    renderLobby();
    Sound.click();
  });
  $('rounds-container').addEventListener('click', event => {
    const button = event.target.closest('.round-card');
    if (!button) return;
    state.requestedRounds = Number(button.dataset.rounds);
    renderLobby();
    $('rounds-container').querySelector(`[data-rounds="${state.requestedRounds}"]`).focus();
    Sound.click();
  });

  function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function startGame() {
    const pool = poolFor(state.selectedCategory);
    if (!pool.length) return;
    closeModal();
    state.scoringMode = $('scoring-mode').value === 'immediate' ? 'immediate' : 'final';
    for (const key of ['p1', 'p2']) {
      state.players[key] = { name: $(`input-${key}-name`).value.trim().slice(0, 15) || `Jogador ${key === 'p1' ? 1 : 2}`, score: 0 };
      storage.set(`movie_${key}_name`, state.players[key].name);
    }
    if(typeof crypto!=='undefined'&&crypto.randomUUID)state.sessionId=crypto.randomUUID();
    state.deck = shuffle(pool).slice(0, effectiveRounds());
    state.totalRounds = state.deck.length;
    state.screen = 'game';
    startRound(0);
    showScreen('game');
    Sound.click();
  }
  $('btn-start-game').addEventListener('click', startGame);
  $('btn-rematch').addEventListener('click', startGame);
  $('btn-home').addEventListener('click', () => {
    if (state.screen !== 'game' || confirm('Voltar ao menu e encerrar esta partida?')) showScreen('lobby');
  });
  $('btn-back-menu').addEventListener('click', () => showScreen('lobby'));

  function updateScores() {
    for (const key of ['p1', 'p2']) $(`display-${key}-score`).textContent = state.players[key].score;
  }

  function startRound(index) {
    state.currentRoundIndex = index;
    state.maxUnlockedStageIndex = 0;
    state.viewingStageIndex = 0;
    state.roundScored = false;
    state.answerRevealed = false;
    const deferred = state.scoringMode === 'final';
    $('judge-instant-buttons').hidden = deferred;
    $('delayed-scoring-note').hidden = !deferred;
    $('judge-deck-title').textContent = deferred ? 'CONFERÊNCIA NO FINAL' : 'REGISTRO DAS LOUSAS';
    $('judge-deck-caption').textContent = deferred ? 'Anotem um palpite para cada imagem' : 'Confirmem as anotações físicas e pontuem';
    $('badge-round').textContent = `RODADA ${pad(index + 1)} / ${pad(state.totalRounds)}`;
    $('tag-category').textContent = currentMovie().categoryName;
    for (const key of ['p1', 'p2']) {
      $(`display-${key}-name`).textContent = state.players[key].name;
      $(`judge-label-${key}`).textContent = state.players[key].name;
    }
    $('display-initial-hint').textContent = currentMovie().initialHint;
    $('game-synopsis').open = false;
    $('game-synopsis-text').textContent = currentMovie().synopsis;
    updateScores();
    renderStepper();
    loadFrame(0);
  }

  function renderStepper() {
    $('stages-stepper').replaceChildren();
    for (let i = 0; i < currentMovie().stages.length; i++) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'film-step';
      button.dataset.index = String(i);
      button.disabled = i > state.maxUnlockedStageIndex || state.answerRevealed || state.roundScored;
      button.classList.add(i === state.viewingStageIndex ? 'active' : i <= state.maxUnlockedStageIndex ? 'revealed' : 'locked');
      button.setAttribute('aria-label', `Frame ${i + 1}, ${6 - i} ${i === 5 ? 'ponto' : 'pontos'}${button.disabled ? ', bloqueado' : ''}`);
      button.setAttribute('aria-pressed', String(i === state.viewingStageIndex));
      button.innerHTML = `<span class="step-tag">FRAME ${pad(i + 1)}</span><span class="step-pts">${6 - i} PTS</span>`;
      button.addEventListener('click', () => {
        if (!isPlaying() || i > state.maxUnlockedStageIndex) return;
        viewFrame(i);
        $('stages-stepper').children[i].focus();
      });
      $('stages-stepper').appendChild(button);
    }
  }

  function loadFrame(index) {
    const token = ++frameRequest;
    clearTimeout(frameTimer);
    const stage = currentMovie().stages[index];
    const displayed = $('current-frame-img');
    const placeholder = $('frame-placeholder');
    displayed.style.display = 'none';
    placeholder.style.display = 'flex';
    $('placeholder-title').textContent = 'CARREGANDO CENA';
    $('placeholder-desc').textContent = 'Preparem seus palpites.';
    $('frame-container').setAttribute('aria-busy', 'true');
    $('badge-stage-number').textContent = `ETAPA ${pad(index + 1)} / 06`;
    $('badge-stage-points').textContent = `${state.scoringMode === 'final' ? 6 - index : currentPoints()} PTS ${state.scoringMode === 'final' ? 'POR ACERTAR AQUI' : 'EM JOGO'}`;
    state.frameReady = false;
    updateControls();
    const image = new Image();
    let settled = false;
    function finish(ok) {
      if (token !== frameRequest || settled) return;
      settled = true;
      clearTimeout(frameTimer);
      $('frame-container').setAttribute('aria-busy', 'false');
      state.frameReady = true;
      if (ok) {
        displayed.src = stage.image;
        displayed.alt = stage.alt;
        displayed.style.transform = `scale(${stage.zoom || 1})`;
        displayed.style.transformOrigin = stage.origin || 'center';
        displayed.style.display = 'block';
        placeholder.style.display = 'none';
      } else {
        displayed.style.display = 'none';
        placeholder.style.display = 'flex';
        $('placeholder-title').textContent = 'PISTA EM TEXTO';
        $('placeholder-desc').textContent = `Não foi possível abrir esta imagem. Pista alternativa: ${stage.alt}`;
      }
      updateControls();
    }
    image.onload = () => finish(true);
    image.onerror = () => finish(false);
    frameTimer = setTimeout(() => finish(false), 10000);
    image.src = stage.image;
  }

  function viewFrame(index) {
    state.viewingStageIndex = index;
    renderStepper();
    loadFrame(index);
    Sound.click();
  }

  function updateControls() {
    const points = state.scoringMode === 'final' ? 6 - state.viewingStageIndex : currentPoints();
    const ready = isPlaying() && state.frameReady;
    const last = state.maxUnlockedStageIndex === 5;
    const reviewing = state.viewingStageIndex < state.maxUnlockedStageIndex;
    const deferred = state.scoringMode === 'final';
    $('badge-current-points').textContent = `${deferred ? 'ACERTO NESTA ETAPA:' : 'VALE'} ${points} ${points === 1 ? 'PONTO' : 'PONTOS'}`;
    $('judge-pts-p1').textContent = `+${points} PTS`;
    $('judge-pts-p2').textContent = `+${points} PTS`;
    $('judge-pts-both').textContent = `+${points} PTS CADA`;
    $('desc-judge-none').textContent = last ? 'Encerrar sem pontos' : 'Nova cena (-1 ponto)';
    $('btn-next-stage').disabled = !ready || (last && !reviewing);
    $('btn-next-stage').textContent = reviewing ? 'REVER PRÓXIMO →' : last ? 'TODAS AS CENAS REVELADAS' : deferred ? 'PRÓXIMA IMAGEM →' : 'NOVA CENA (-1 PONTO) →';
    $('btn-prev-frame').disabled = !ready || state.viewingStageIndex === 0;
    $('label-frame-counter').textContent = `FRAME ${pad(state.viewingStageIndex + 1)} • ${state.maxUnlockedStageIndex + 1} DE 6 LIBERADOS`;
    for (const id of ['btn-judge-p1', 'btn-judge-p2', 'btn-judge-both', 'btn-judge-none']) $(id).disabled = !ready || deferred;
    $('btn-show-answer-direct').disabled = !isPlaying() || (deferred && (!last || !ready));
    $('btn-show-answer-direct').textContent = deferred ? 'VER RESPOSTA E CONFERIR LOUSAS' : 'REVELAR TÍTULO DA PRODUÇÃO';
  }

  function unlockFrame() {
    if (!isPlaying() || !state.frameReady || state.maxUnlockedStageIndex >= 5) return;
    state.maxUnlockedStageIndex++;
    viewFrame(state.maxUnlockedStageIndex);
    Sound.revealFrame();
  }
  $('btn-next-stage').addEventListener('click', () => {
    if (!isPlaying() || !state.frameReady) return;
    if (state.viewingStageIndex < state.maxUnlockedStageIndex) viewFrame(state.viewingStageIndex + 1);
    else unlockFrame();
  });
  $('btn-prev-frame').addEventListener('click', () => {
    if (isPlaying() && state.frameReady && state.viewingStageIndex > 0) viewFrame(state.viewingStageIndex - 1);
  });

  function finishRound(winner) {
    if (!isPlaying()) return;
    const deferred = state.scoringMode === 'final';
    if (deferred && (winner !== 'reveal' || state.maxUnlockedStageIndex !== 5 || !state.frameReady)) return;
    if (winner !== 'reveal' && !state.frameReady) return;
    if (winner === 'none' && state.maxUnlockedStageIndex < 5) return unlockFrame();
    state.answerRevealed = true;
    state.roundScored = !deferred;
    ++frameRequest;
    clearTimeout(frameTimer);
    const points = currentPoints();
    for (const key of ['p1', 'p2']) {
      if (!deferred && (winner === key || winner === 'both')) state.players[key].score += points;
    }
    $('modal-round-result').textContent = deferred ? 'Resposta revelada. Registrem o resultado de cada pessoa antes de continuar.' : winner === 'both' ? `Os dois ganharam ${points} pontos.` : ['p1', 'p2'].includes(winner) ? `${state.players[winner].name} ganhou ${points} pontos.` : 'Rodada encerrada sem pontos.';
    $('deferred-score-panel').hidden = !deferred;
    for (const key of ['p1', 'p2']) {
      $(`score-choice-label-${key}`).textContent = state.players[key].name;
      $(`score-choice-${key}`).value = '';
    }
    updateScores();
    renderStepper();
    updateControls();
    const movie = currentMovie();
    $('modal-cat-badge').textContent = movie.categoryName;
    $('modal-movie-title').textContent = movie.title;
    $('modal-movie-original').textContent = `Original: ${movie.originalTitle}`;
    $('modal-movie-year').textContent = movie.year;
    $('modal-movie-director').textContent = movie.director || 'Créditos na ficha de origem';
    $('modal-movie-trivia').textContent = movie.trivia;
    $('modal-synopsis').open = false;
    $('modal-synopsis-text').textContent = movie.synopsis;
    $('btn-modal-next').textContent = state.currentRoundIndex + 1 === state.totalRounds ? (deferred ? 'REGISTRAR E VER RESULTADO FINAL →' : 'VER RESULTADO FINAL →') : (deferred ? 'REGISTRAR PONTOS E CONTINUAR →' : 'PRÓXIMA RODADA →');
    $('btn-modal-next').disabled = deferred;
    $('deferred-score-preview').textContent = 'Escolham um resultado para cada pessoa.';
    modal.classList.add('active');
    setBackgroundInert(true);
    (deferred ? $('score-choice-p1') : $('btn-modal-next')).focus();
    if (['p1', 'p2', 'both'].includes(winner)) Sound.pointScored();
    else Sound.answerReveal();
  }
  for (const winner of ['p1', 'p2', 'both', 'none']) $('btn-judge-' + winner).addEventListener('click', () => finishRound(winner));
  $('btn-show-answer-direct').addEventListener('click', () => finishRound('reveal'));
  function deferredPoints() {
    const choices = ['p1', 'p2'].map(key => $(`score-choice-${key}`).value);
    if (!choices.every(choice => /^[0-6]$/.test(choice))) return null;
    return choices.map(choice => choice === '0' ? 0 : 7 - Number(choice));
  }
  for (const key of ['p1', 'p2']) $(`score-choice-${key}`).addEventListener('change', () => {
    if (state.scoringMode !== 'final' || !modal.classList.contains('active') || state.roundScored) return;
    const points = deferredPoints();
    $('btn-modal-next').disabled = !points;
    $('deferred-score-preview').textContent = points ? `${state.players.p1.name}: +${points[0]} pontos • ${state.players.p2.name}: +${points[1]} pontos.` : 'Escolham um resultado para cada pessoa.';
  });
  modal.addEventListener('keydown', event => {
    // Wrap focus between the synopsis disclosure and the next-round button.
    if (event.key === 'Tab') {
      const first = state.scoringMode === 'final' ? $('score-choice-p1') : $('modal-synopsis-toggle');
      const last = $('btn-modal-next').disabled ? $('modal-synopsis-toggle') : $('btn-modal-next');
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    }
    // Escape deliberately does not reopen a scored/revealed round.
    if (event.key === 'Escape') event.preventDefault();
  });
  $('btn-modal-next').addEventListener('click', () => {
    if (!modal.classList.contains('active')) return;
    if (state.scoringMode === 'final' && !state.roundScored) {
      const points = deferredPoints();
      if (!points) return;
      state.roundScored = true;
      state.players.p1.score += points[0];
      state.players.p2.score += points[1];
      updateScores();
      if (points.some(n => n > 0)) Sound.pointScored();
    }
    if (!state.roundScored) return;
    closeModal();
    if (state.currentRoundIndex + 1 < state.totalRounds) {
      startRound(state.currentRoundIndex + 1);
      $('display-initial-hint').focus();
    } else endGame();
  });

  function endGame() {
    const {p1, p2} = state.players;
    for (const key of ['p1', 'p2']) {
      const player = state.players[key];
      const winner = player.score > state.players[key === 'p1' ? 'p2' : 'p1'].score;
      $(`podium-name-${key}`).textContent = player.name;
      $(`podium-points-${key}`).textContent = player.score;
      $(`podium-box-${key}`).classList.toggle('winner', winner);
      $(`badge-${key}-winner`).style.display = winner ? 'block' : 'none';
    }
    $('victory-title').textContent = p1.score === p2.score ? 'EMPATE!' : `VITÓRIA DE ${p1.score > p2.score ? p1.name.toUpperCase() : p2.name.toUpperCase()}`;
    $('victory-subtitle').textContent = `${p1.name}: ${p1.score} pontos • ${p2.name}: ${p2.score} pontos. Que tal mais uma sessão?`;
    showScreen('victory');
    Sound.victory();
  }

  // A sessão online mantém a lógica local e transmite apenas o estado de jogo.
  if (typeof location !== 'undefined' && typeof URLSearchParams !== 'undefined' && new URLSearchParams(location.search).get('online') === '1' && window.parent !== window) {
    let onlineSeat = null;
    const sessionId=crypto.randomUUID();
    let applying = false;
    let previous = '';
    const snapshot = () => ({
      ...state, sessionId:state.sessionId||sessionId, deck: state.deck.map(movie => movie.id),
      choices: ['p1', 'p2'].map(key => $(`score-choice-${key}`).value),
      modalOpen: modal.classList.contains('active')
    });
    function receive(saved) {
      if (!saved || !Array.isArray(saved.deck)) return;
      const movies = saved.deck.map(id => catalog.find(movie => movie.id === id));
      if (movies.some(movie => !movie)) return;
      applying = true;
      const old = { round: state.currentRoundIndex, frame: state.viewingStageIndex, deck: state.deck.map(m => m.id).join(','), modal: modal.classList.contains('active') };
      closeModal();
      Object.assign(state, saved, { deck: movies });
      if (state.screen === 'game' && movies.length) {
        const target = { ...state };
        if (old.round !== state.currentRoundIndex || old.deck !== saved.deck.join(',')) startRound(state.currentRoundIndex);
        Object.assign(state, target);
        showScreen('game');
        $('badge-round').textContent = `RODADA ${pad(state.currentRoundIndex + 1)} / ${pad(state.totalRounds)}`;
        for (const key of ['p1', 'p2']) $(`display-${key}-name`).textContent = state.players[key].name;
        updateScores(); renderStepper();
        if (old.frame !== state.viewingStageIndex || old.deck !== saved.deck.join(',')) loadFrame(state.viewingStageIndex);
        if (saved.modalOpen) {
          state.frameReady = true;
          state.answerRevealed = false; state.roundScored = false;
          finishRound('reveal');
          Object.assign(state, target);
          ['p1', 'p2'].forEach((key,i) => $(`score-choice-${key}`).value = saved.choices?.[i] || '');
          updateScores();
        }
        updateControls();
      } else if (state.screen === 'victory') endGame();
      else showScreen('lobby');
      const note = $('online-waiting-note');
      if (note) note.textContent = state.screen === 'lobby' ? 'Aguarde o anfitrião configurar e iniciar a sessão.' : 'Sessão online: acompanhe as imagens e confira as lousas com o anfitrião.';
      applying = false;
    }
    function guestMessage() {
      document.body.classList.add('online-guest');
      document.querySelectorAll('button,select,input').forEach(element => { if (!element.closest('details') && element.id !== 'btn-sound-toggle') element.setAttribute('tabindex', '-1'); });
      let note = $('online-waiting-note');
      if (!note) { note = document.createElement('p'); note.id = 'online-waiting-note'; note.style.cssText = 'text-align:center;padding:16px;color:#c5c7d3;font:14px Arial'; document.querySelector('.app-header').after(note); }
      note.textContent = 'Sessão online: o anfitrião controla as imagens e confere as duas lousas. Aguarde ele iniciar a sessão.';
    }
    window.addEventListener('message', event => {
      if (event.origin !== location.origin || event.source !== window.parent) return;
      if (event.data?.type === 'movie-room') {
        onlineSeat = event.data.seat;
        for (const [i,key] of ['p1','p2'].entries()) { $(`input-${key}-name`).value = event.data.players[i]; $(`input-${key}-name`).readOnly = true; }
        if (event.data.snapshot) receive(event.data.snapshot);
        if (onlineSeat === 1) guestMessage();
      }
      if(event.data?.type==='movie-score-choice'&&onlineSeat===0&&modal.classList.contains('active')&&state.scoringMode==='final'){const key=event.data.seat===0?'p1':'p2',stage=event.data.stage;if(Number.isInteger(stage)&&stage>=-1&&stage<=5){$(`score-choice-${key}`).value=stage===-1?'0':String(stage+1);$(`score-choice-${key}`).dispatchEvent(new Event('change',{bubbles:true}));}}
      if (event.data?.type === 'movie-sync' && onlineSeat === 1) receive(event.data.snapshot);
    });
    // A pessoa convidada pode abrir sinopses, mas não avançar a partida do anfitrião.
    for (const type of ['click', 'keydown', 'change']) document.addEventListener(type, event => {
      if (onlineSeat !== 1 || applying) return;
      if (event.target.closest('details') || event.target.closest('#btn-sound-toggle')) return;
      event.preventDefault(); event.stopImmediatePropagation();
    }, true);
    setInterval(() => {
      if (onlineSeat !== 0 || applying) return;
      const data = snapshot(), serialized = JSON.stringify(data);
      previous = serialized;
      window.parent.postMessage({ type: 'movie-snapshot', snapshot: data }, location.origin);
    }, 400);
    window.parent.postMessage({ type: 'movie-ready' }, location.origin);
  }

  renderLobby();
});

