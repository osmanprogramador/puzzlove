# Peças do Tempo

Jogo online para duas pessoas, com salas por código de convite de 8 caracteres.

[**▶ Jogar agora — Puzzlove**](https://osmanprogramador.github.io/puzzlove/)

1. A tela inicial oferece Quebra-cabeça, Qual é o Filme? e Caminho a Dois. Escolha o jogo, preencha seu nome e crie a sala. Para um convite recebido, use Já tenho um código de convite.
2. Envie o código ou o link do convite à outra pessoa. Ela informa o nome e entra.
3. No quebra-cabeça, escolha 2 ou 3 rodadas. Quem cria escolhe a primeira foto e a quantidade de peças dentro da sala; a pessoa convidada escolhe a segunda; a terceira volta a quem criou.
4. Cada participante clica em Estou pronto. Há uma contagem regressiva de 3 segundos.

## Quebra-cabeças

- Ao terminar uma rodada, vejam o resultado e avancem à próxima escolha, sem trocar de sala. A corrida termina assim que alguém completa o tabuleiro e vale um ponto. Uma partida de 2 rodadas pode empatar. No cooperativo, o histórico guarda o tempo de cada montagem.
- Cooperativo: as duas pessoas montam o mesmo tabuleiro, com sincronização online.
- Corrida: mesma foto, mesmas peças, mesma ordem na bandeja e início conjunto. Cada pessoa monta seu tabuleiro e acompanha o progresso da outra. O servidor registra o tempo de conclusão.
- 24, 48, 100, 300, 500 ou 1.000 peças com abas e cavidades complementares.
- Arraste uma peça da bandeja à mesa. Uma peça incorreta continua solta e pode ser movida. Arraste-a de volta à bandeja ou selecione e use Devolver peça.
- No celular, também é possível tocar para selecionar e depois tocar no destino. O zoom e Mover mesa ajudam com os quebra-cabeças maiores.
- Só as bordas filtra as peças externas. A fotografia completa, o nome e o local ficam ocultos até a conclusão da rodada. Não há imagem-guia nem foto de referência durante a partida.
- O álbum inicial guarda os destinos montados neste navegador e mostra suas fotos, nomes e a marca Já montado. Ao reconectar numa sala concluída, o histórico da sala restaura essas descobertas nesse aparelho. Sem conta, o álbum não sincroniza automaticamente em outro navegador.
- Ampliar mesa ocupa a tela disponível com tabuleiro e bandeja juntos. Use dois dedos no tabuleiro para ampliar e mover, ou os botões de zoom (até 1.200%) e Mover mesa. As peças têm áreas de toque maiores e paginação adaptada ao aparelho.
- Teclado: selecione uma peça com Enter, foque a mesa, use as setas para posicionar, Enter para soltar ou Esc para devolver.
- Peças corretas encaixam próximas do destino e ficam fixas. Uma peça em uso fica reservada por até 30 segundos, com renovação enquanto selecionada.

## Cinema online

O anfitrião configura o catálogo, avança as imagens e registra os resultados das duas lousas. A pessoa convidada acompanha as mesmas imagens e o placar. Cada pessoa registra seus palpites secretos por imagem no site; eles são revelados na última imagem. Também é possível continuar usando lousas físicas. As sinopses continuam ocultas por padrão. O catálogo anterior, com Natal e sem terror, foi preservado.

O projeto original de filmes continua funcionando localmente e oferece o botão Jogar online. A cópia hospedada fica em public/filme.

## Fotos e persistência

Dez fotografias reais de Recife e Olinda, com vistas históricas e contemporâneas (datas de 1880 a 2024). Fontes, autores e licenças estão no catálogo, nos créditos e em public/photos/credits.json; o nome do destino e a fonte específica são revelados após a montagem. Não são fotos atuais de 2026. Não houve geração de cenas históricas por IA.

As salas duram 7 dias desde a criação. Progresso e participantes ficam no D1 do servidor; o aparelho guarda apenas o token para reconectar. Ao abrir o início ou o mesmo convite no navegador usado na partida, a sala é retomada automaticamente enquanto seu acesso estiver salvo. Sair da sala encerra essa retomada automática. A sala aceita no máximo duas pessoas. Quem possuir o código pode ocupar uma vaga livre; não há listagem pública de salas.

## Desenvolvimento

Node 22.13+ e Git para publicação. Instale com npm run install:ci e rode npm run dev. Configure d1: DB no manifesto. Gere migrations com npm run db:generate. Aplique a migration local antes de testar a API, conforme o README do starter e os comandos do Sites.

No Windows com caminhos acentuados, o SQLite local pode precisar de uma pasta temporária ASCII. Defina PECAS_LOCAL_STATE para essa pasta antes de npm run dev e use o mesmo caminho no argumento --persist-to do Wrangler. Isso só afeta a prévia; produção usa o D1 provisionado pelo Sites.

Verificação: node scripts/test-online.mjs testa duas conexões HTTP, sincronização, conflitos, devoluções, conclusão, corrida independente e cinema. TEST_URL seleciona outro servidor de teste. Não execute esse teste na produção, pois ele cria salas de teste.


## GitHub e hospedagem

Este é um único site: a página inicial oferece Qual é o Filme?, Quebra-cabeça e Caminho a Dois, com seus modos. O código pode ser mantido num repositório GitHub. O GitHub Pages sozinho não executa a API nem o D1 necessários às salas online; a versão completa usa um servidor Cloudflare Workers com D1 (o servidor das salas é publicado separadamente no Sites). O filme local pode funcionar num site estático, mas isso não substitui as salas sincronizadas. Não coloque .env, tokens, .sites-runtime, bancos locais, node_modules ou arquivos de saída no repositório.

Verificações adicionais: node scripts/test-rounds.mjs testa alternância e encerramento; node scripts/test-view.mjs confere o zoom em torno do ponto tocado e as dez fotos. As prévias responsivas devem cobrir celular em pé/deitado, tablet e desktop.

## Publicação pelo GitHub

A interface completa é publicada em https://osmanprogramador.github.io/puzzlove/ pelo workflow Publicar o jogo. Inclui os três jogos, as fotos e os álbuns. npm run build:pages gera pages-dist. O servidor de salas permanece separado, com D1; PUZZLOVE_API_ORIGIN pode selecionar outro servidor na compilação. A API permite o acesso dessa interface pelo domínio https://osmanprogramador.github.io e mantém a identificação dos jogadores por token de sala. Não há redirecionamento para o servidor ao jogar.

O endereço atual do servidor fica em vite.pages.config.ts e pode ser substituído por PUZZLOVE_API_ORIGIN na compilação. O servidor ativo é https://pecas-do-tempo-osman.osmananalisedesistem.chatgpt.site; o endereço público para jogar continua sendo o GitHub.

O código completo do servidor publicado está na pasta server/ do repositório GitHub. Seu manifesto preserva a identidade original do servidor e seu banco de salas. Para alterar e publicar a API, use o projeto server/ e preserve seu project_id.


## Novidades da mesa

- Filtros de borda/meio, três bandejas compartilhadas e embaralhamento local da ordem das peças.
- Peças vizinhas podem formar conjuntos fora da posição final; a seleção bloqueia o conjunto inteiro até soltar. Peças já fixadas na posição correta permanecem no tabuleiro.
- Verde e terracota identificam as seleções; o movimento mostra a posição da outra pessoa no modo juntos.
- Desafios de 24, 48, 100, 300, 500 e 1.000 peças. Rotação opcional de peças soltas, definida na escolha de cada rodada; conjuntos são unidos na orientação correta.
- Palpites por imagem guardados no servidor: cada pessoa vê os próprios, e os dois veem as respostas na última imagem ou ao revelar o título. Respostas de pistas anteriores ficam fechadas. O anfitrião confirma a primeira pista acertada na conferência final, preservando o placar e os modos de pontuação existentes.
- Álbum local com data, tempo, tamanho, modo, rotação e participantes; histórico de todas as novas conclusões. Os destinos antigos já montados continuam revelados, sem inventar os dados de partidas anteriores.
- Convite pelo WhatsApp, compartilhamento nativo quando disponível e QR code gerado no próprio navegador.

Validação: testes de conjuntos, rotação, privacidade e rodadas em `scripts/test-features.mjs`; integração com dois participantes em `scripts/test-features-online.mjs` (usar TEST_URL para apontar ao servidor de teste).


## Retomada, backup e sorteio

A última sala e sua chave de acesso ficam salvas no navegador. Reabrir a página inicial ou o convite retoma a mesma vaga e o estado salvo no servidor, sem criar outro participante. Não existe recuperação do acesso em outro navegador sem sua chave. As salas continuam expirando sete dias depois da criação. Falha temporária de rede preserva o acesso para tentar novamente; uma sala expirada permite começar outra.

O menu oferece **Sortear nosso próximo jogo**, que escolhe entre os três jogos e abre a configuração correspondente. O casal continua escolhendo os detalhes antes de criar a sala.

**Backup dos nossos álbuns** baixa um arquivo JSON e restaura lembranças em outro navegador, sem duplicar as existentes. O arquivo inclui destinos descobertos, resultados das montagens e encontros concluídos. Respostas privadas só são exportadas se a pessoa marcar essa opção. Chaves das salas e rascunhos não são exportados. A restauração preserva textos já guardados e pode recuperar textos privados a partir de um backup completo da mesma pessoa. Limite de arquivo: 8 MB.

## Caminho a Dois

Jornada cooperativa com sete encontros: Jesus, oração, graça, perdão, confiança, amor e serviço. Cada encontro tem cinco momentos: descobrir a história por pistas, ler a passagem inteira e seu contexto, conversar sobre pistas diferentes, refletir em particular e escolher uma atitude possível com oração opcional. Os dois confirmam para avançar. Não há pontuação ou competição nas respostas pessoais.

Cada pessoa pode pular uma pergunta, guardar só para si ou escolher compartilhar. O servidor filtra textos privados tanto na etapa atual quanto no histórico enviado à outra pessoa. Rascunhos permanecem no aparelho. Encontros concluídos, referências, textos bíblicos e mensagens formam o **Nosso álbum do caminho**, salvo neste navegador e incluído no backup conforme a escolha de privacidade.

Leituras locais: Lucas 24:13–35; Mateus 6:5–13; Lucas 15:11–32; Mateus 18:21–35; Marcos 4:35–41; 1 Coríntios 13:1–7; João 13:1–17. Texto da Bíblia Portuguesa Mundial, tradução em revisão, domínio público, consultado em 11/10/2026 na [eBible](https://ebible.org/bible/details.php?id=porbrbsl). A origem de cada capítulo está em `lib/scripture.ts` e na tela de leitura. Explicações, desafios e perguntas são material de apoio do jogo; o casal pode usar sua própria Bíblia.

Validação: `node scripts/test-journey.mjs` percorre os sete encontros e verifica consentimento, privacidade, avanço, pausa, passagens, backup, deduplicação e retomada autenticada. `node scripts/test-journey-online.mjs` testa uma jornada com dois clientes contra a API; use `TEST_URL` apenas com servidor de testes, pois o script cria salas.


## Cinema integrado ao Puzzlove

A tela online de Qual é o Filme? usa componentes do próprio Puzzlove. O iframe e sua rolagem interna foram retirados. A imagem ocupa a área principal, com pistas e navegação logo abaixo; o palpite fica ao lado no computador e abaixo no celular. Ampliar cinema utiliza a tela disponível e pode ser fechado com Reduzir ou Escape. O convite fica em uma seção recolhida durante a sessão.

Configuração, placar, sinopse opcional, seis pistas, conferência e resultado agora fazem parte da mesma interface. Os 115 títulos e os 25 especiais de Natal foram preservados. A API existente e o formato dos estados de cinema são mantidos, permitindo continuar salas iniciadas na interface anterior sem republicar o servidor.

`node scripts/export-cinema-catalog.mjs` gera `public/filme/catalog.json` a partir do catálogo original. `node scripts/test-cinema.mjs` verifica paridade dos títulos, ausência de repetição, progressão de pistas, pontuação final e imediata, revisão de imagens e compatibilidade com estados antigos. A versão local original continua disponível em `public/filme`.


A página das pistas ajusta a imagem ao espaço disponível entre o cabeçalho e os controles. A navegação e o palpite permanecem visíveis sem rolagem da página durante as pistas. A altura responde à tela, orientação e área visível do navegador. Em telas horizontais baixas, o cabeçalho da marca é recolhido e Sair da sala fica na barra do jogo. Sinopse abre em diálogo nativo com botão de fechar e Escape; histórico e convite são opcionais. Conferência e configuração podem mostrar conteúdos mais longos.

Verificação de layout na prévia: larguras/alturas CSS 1365×768, 768×1024, 390×844, 320×666 e 768×480. Em todas, a altura do documento foi igual à da tela, não havia iframe e navegação, revelação e campo de palpite estavam dentro da área visível.
