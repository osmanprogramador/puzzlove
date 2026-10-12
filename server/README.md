# Servidor das salas Puzzlove

A interface fica em https://osmanprogramador.github.io/puzzlove/. Este projeto hospeda apenas a API /api/rooms e o banco D1 das partidas.

Salas por convite para duas pessoas, com expiração de 7 dias, verificação de token, ações por revisão e acesso do navegador permitido apenas para o próprio servidor e https://osmanprogramador.github.io. O catálogo e as regras são os mesmos do projeto principal.

O servidor também sincroniza os sete encontros de Caminho a Dois, incluindo pausa e retomada. Respostas privadas são filtradas por participante antes de enviar a etapa atual ou o histórico. A API e a identidade do banco existente são preservadas.
