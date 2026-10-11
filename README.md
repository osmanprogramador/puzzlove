# Peças do Tempo

Jogo online para duas pessoas, com salas por código de convite de 8 caracteres.

[**▶ Jogar agora — filmes e quebra-cabeças**](https://pecas-do-tempo-osman.osmananalisedesistem.chatgpt.site/)

Código-fonte completo do site publicado, mantido em [osmanprogramador/puzzlove](https://github.com/osmanprogramador/puzzlove). Não é necessário instalar nada para jogar pelo link acima.

1. Escolha Quebra-cabeça ou Qual é o Filme?, preencha seu nome e crie a sala.
2. Envie o código ou o link do convite à outra pessoa. Ela informa o nome e entra.
3. No quebra-cabeça, escolha 2 ou 3 rodadas. Quem cria escolhe a primeira foto e a quantidade de peças dentro da sala; a pessoa convidada escolhe a segunda; a terceira volta a quem criou.
4. Cada participante clica em Estou pronto. Há uma contagem regressiva de 3 segundos.

## Quebra-cabeças

- Ao terminar uma rodada, vejam o resultado e avancem à próxima escolha, sem trocar de sala. A corrida termina assim que alguém completa o tabuleiro e vale um ponto. Uma partida de 2 rodadas pode empatar. No cooperativo, o histórico guarda o tempo de cada montagem.
- Cooperativo: as duas pessoas montam o mesmo tabuleiro, com sincronização online.
- Corrida: mesma foto, mesmas peças, mesma ordem na bandeja e início conjunto. Cada pessoa monta seu tabuleiro e acompanha o progresso da outra. O servidor registra o tempo de conclusão.
- 100, 300, 500 ou 1.000 peças com abas e cavidades complementares.
- Arraste uma peça da bandeja à mesa. Uma peça incorreta continua solta e pode ser movida. Arraste-a de volta à bandeja ou selecione e use Devolver peça.
- No celular, também é possível tocar para selecionar e depois tocar no destino. O zoom e Mover mesa ajudam com os quebra-cabeças maiores.
- Só as bordas filtra as peças externas. A fotografia completa, o nome e o local ficam ocultos até a conclusão da rodada. Não há imagem-guia nem foto de referência durante a partida.
- O álbum inicial guarda os destinos montados neste navegador e mostra suas fotos, nomes e a marca Já montado. Ao reconectar numa sala concluída, o histórico da sala restaura essas descobertas nesse aparelho. Sem conta, o álbum não sincroniza automaticamente em outro navegador.
- Ampliar mesa ocupa a tela disponível com tabuleiro e bandeja juntos. Use dois dedos no tabuleiro para ampliar e mover, ou os botões de zoom (até 1.200%) e Mover mesa. As peças têm áreas de toque maiores e paginação adaptada ao aparelho.
- Teclado: selecione uma peça com Enter, foque a mesa, use as setas para posicionar, Enter para soltar ou Esc para devolver.
- Peças corretas encaixam próximas do destino e ficam fixas. Uma peça em uso fica reservada por até 30 segundos, com renovação enquanto selecionada.

## Cinema online

O anfitrião configura o catálogo, avança as imagens e registra os resultados das duas lousas. A pessoa convidada acompanha as mesmas imagens e o placar. Ambos anotam seus palpites em papel e conferem juntos. As sinopses continuam ocultas por padrão. O catálogo anterior, com Natal e sem terror, foi preservado.

O projeto original de filmes continua funcionando localmente e oferece o botão Jogar online. A cópia hospedada fica em public/filme.

## Fotos e persistência

Dez fotografias reais de Recife e Olinda, com vistas históricas e contemporâneas (datas de 1880 a 2024). Fontes, autores e licenças estão no catálogo, nos créditos e em public/photos/credits.json; o nome do destino e a fonte específica são revelados após a montagem. Não são fotos atuais de 2026. Não houve geração de cenas históricas por IA.

As salas duram 7 dias desde a criação. Progresso e participantes ficam no D1 do servidor; o aparelho guarda apenas o token para reconectar. Volte pelo mesmo link e clique em Entrar no mesmo navegador. A sala aceita no máximo duas pessoas. Quem possuir o código pode ocupar uma vaga livre; não há listagem pública de salas.

## Desenvolvimento

Node 22.13+ e Git para publicação. Instale com npm run install:ci e rode npm run dev. Configure d1: DB no manifesto. Gere migrations com npm run db:generate. Aplique a migration local antes de testar a API, conforme o README do starter e os comandos do Sites.

No Windows com caminhos acentuados, o SQLite local pode precisar de uma pasta temporária ASCII. Defina PECAS_LOCAL_STATE para essa pasta antes de npm run dev e use o mesmo caminho no argumento --persist-to do Wrangler. Isso só afeta a prévia; produção usa o D1 provisionado pelo Sites.

Verificação: node scripts/test-online.mjs testa duas conexões HTTP, sincronização, conflitos, devoluções, conclusão, corrida independente e cinema. TEST_URL seleciona outro servidor de teste. Não execute esse teste na produção, pois ele cria salas de teste.


## GitHub e hospedagem

Este é um único site: a página inicial oferece Qual é o Filme? e Quebra-cabeça, com seus modos. O código pode ser mantido num repositório GitHub. O GitHub Pages sozinho não executa a API nem o D1 necessários às salas online; a versão completa usa um servidor Cloudflare Workers com D1 (a hospedagem atual já está configurada). O filme local pode funcionar num site estático, mas isso não substitui as salas sincronizadas. Não coloque .env, tokens, .sites-runtime, bancos locais, node_modules ou arquivos de saída no repositório.

Verificações adicionais: node scripts/test-rounds.mjs testa alternância e encerramento; node scripts/test-view.mjs confere o zoom em torno do ponto tocado e as dez fotos. As prévias responsivas devem cobrir celular em pé/deitado, tablet e desktop.
