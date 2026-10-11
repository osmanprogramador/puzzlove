// Catálogo local personalizado. Fontes das imagens: assets/credits.json
const MOVIE_DATABASE = [
  {
    "id": "sci_01",
    "title": "A Origem",
    "originalTitle": "Inception",
    "category": "ficcao",
    "categoryName": "FICÇÃO CIENTÍFICA",
    "year": 2010,
    "director": "Christopher Nolan",
    "initialHint": "Uma missão depende de uma equipe capaz de entrar em um lugar que ninguém deveria invadir.",
    "trivia": "A famosa cena do corredor giratório foi filmada sem computação gráfica: a equipe construiu uma centrífuga gigante de hotel de verdade com mais de 30 metros de comprimento.",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/sci_01-1.jpg",
        "alt": "Um homem de terno observa pessoas adormecidas em um quarto de hotel."
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/sci_01-2.jpg",
        "alt": "Um pequeno pião de metal sobre uma superfície."
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/sci_01-3.jpg",
        "alt": "Homens flutuam durante uma luta no corredor de um hotel."
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/sci_01-4.jpg",
        "alt": "Uma rua se curva e os prédios se dobram sobre a cidade."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/sci_01-5.jpg",
        "alt": "Uma equipe de terno em uma avenida inundada."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/sci_01-6.jpg",
        "alt": "O grupo observa uma cidade se dobrando no horizonte."
      }
    ],
    "synopsis": "Dom Cobb invade sonhos para roubar informações. Para tentar voltar para casa, ele aceita uma missão diferente: implantar uma ideia na mente de alguém, enquanto enfrenta lembranças que ameaçam toda a equipe."
  },
  {
    "id": "sci_02",
    "title": "Interestelar",
    "originalTitle": "Interstellar",
    "category": "ficcao",
    "categoryName": "FICÇÃO CIENTÍFICA",
    "year": 2014,
    "director": "Christopher Nolan",
    "initialHint": "Uma família precisa se separar para buscar um futuro além do seu mundo.",
    "trivia": "O físico teórico Kip Thorne colaborou diretamente com a equipe de efeitos visuais para calcular com exatidão física a curvatura da luz no buraco negro Gargantua.",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/sci_02-1.jpg",
        "alt": "Um planeta com anéis visto do espaço."
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/sci_02-2.jpg",
        "alt": "Exploradores caminham em uma paisagem de gelo."
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/sci_02-3.jpg",
        "alt": "Silhuetas diante de um céu repleto de estrelas."
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/sci_02-4.jpg",
        "alt": "Pai e filha conversam perto de uma plantação."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/sci_02-5.jpg",
        "alt": "Astronautas caminham na água ao lado de uma nave."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/sci_02-6.jpg",
        "alt": "Uma nave circular se aproxima de um buraco negro luminoso."
      }
    ],
    "synopsis": "Com a Terra perdendo a capacidade de sustentar a humanidade, um antigo piloto participa de uma expedição em busca de outro planeta habitável. A viagem coloca à prova sua relação com os filhos e sua compreensão do tempo."
  },
  {
    "id": "sci_03",
    "title": "Matrix",
    "originalTitle": "The Matrix",
    "category": "ficcao",
    "categoryName": "FICÇÃO CIENTÍFICA",
    "year": 1999,
    "director": "Lana & Lilly Wachowski",
    "initialHint": "Um trabalhador começa a desconfiar de que sua rotina esconde uma realidade muito maior.",
    "trivia": "O famoso código digital verde que escorre na tela é, na verdade, composto por receitas de sushi retiradas de livros de culinária japonesa da esposa do designer.",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/sci_03-1.jpg",
        "alt": "Um homem adormece diante de monitores em um quarto escuro."
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/sci_03-2.jpg",
        "alt": "Uma mulher cuida de um homem deitado e conectado a equipamentos."
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/sci_03-3.jpg",
        "alt": "Dois personagens de roupa preta conversam em uma sala."
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/sci_03-4.jpg",
        "alt": "Um homem desvia de tiros no terraço de um edifício."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/sci_03-5.jpg",
        "alt": "O protagonista se inclina para trás enquanto projéteis cruzam o ar."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/sci_03-6.jpg",
        "alt": "Quatro personagens de sobretudo e óculos escuros diante da cidade."
      }
    ],
    "synopsis": "Um programador descobre que o mundo cotidiano esconde uma realidade controlada por máquinas. Guiado por um grupo de rebeldes, ele precisa decidir se está disposto a abandonar tudo o que conhecia para enfrentar esse sistema."
  },
  {
    "id": "anim_01",
    "title": "Enrolados",
    "originalTitle": "Tangled",
    "category": "animacao",
    "categoryName": "ANIMAÇÃO",
    "year": 2010,
    "director": "Nathan Greno & Byron Howard",
    "initialHint": "Uma jovem decide sair de casa e conhecer de perto algo que sempre observou de longe.",
    "trivia": "Custou mais de US$ 260 milhões devido aos anos necessários para desenvolver softwares inéditos para simular o movimento de 20 metros de cabelo dourado.",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/anim_01-1.jpg",
        "alt": "Um castelo no alto de uma ilha, cercado pelo mar."
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/anim_01-2.jpg",
        "alt": "Um viajante encontra uma torre escondida entre árvores."
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/anim_01-3.jpg",
        "alt": "Duas pessoas em um barco cercado por lanternas flutuantes."
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/anim_01-4.jpg",
        "alt": "Um casal espreita por entre longos cabelos dourados."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/anim_01-5.jpg",
        "alt": "Um cavalo branco observa uma jovem e seu companheiro na floresta."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/anim_01-6.jpg",
        "alt": "A jovem de cabelo dourado empunha uma frigideira com seus amigos."
      }
    ],
    "synopsis": "Uma jovem de cabelos mágicos vive isolada numa torre e sonha em conhecer as luzes que aparecem todos os anos no céu. A chegada de um ladrão oferece uma chance de fugir e descobrir suas origens."
  },
  {
    "id": "anim_02",
    "title": "Ratatouille",
    "originalTitle": "Ratatouille",
    "category": "animacao",
    "categoryName": "ANIMAÇÃO",
    "year": 2007,
    "director": "Brad Bird",
    "initialHint": "Um talento improvável encontra uma oportunidade em um ambiente cheio de regras.",
    "trivia": "O chef francês Thomas Keller permitiu que a equipe fizesse estágio prático em sua cozinha de 3 estrelas Michelin para reproduzir o ritmo exato da gastronomia profissional.",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/anim_02-1.jpg",
        "alt": "Paris vista à noite pela janela de um apartamento."
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/anim_02-2.jpg",
        "alt": "Telhados de Paris ao pôr do sol, com a torre ao fundo."
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/anim_02-3.jpg",
        "alt": "Um crítico prova um prato de legumes cuidadosamente montado."
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/anim_02-4.jpg",
        "alt": "Dois jovens cozinheiros trabalham em uma cozinha."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/anim_02-5.jpg",
        "alt": "Um ratinho se esconde entre utensílios de cozinha."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/anim_02-6.jpg",
        "alt": "Um pequeno rato mostra ervas a um cozinheiro assustado."
      }
    ],
    "synopsis": "Um rato apaixonado pela culinária encontra numa cozinha de Paris a oportunidade de realizar seu sonho. Sua parceria improvável com um funcionário inexperiente precisa permanecer em segredo para que os dois continuem cozinhando."
  },
  {
    "id": "anim_03",
    "title": "Shrek",
    "originalTitle": "Shrek",
    "category": "animacao",
    "categoryName": "ANIMAÇÃO",
    "year": 2001,
    "director": "Andrew Adamson & Vicky Jenson",
    "initialHint": "Para recuperar a tranquilidade de casa, o protagonista aceita uma missão inesperada.",
    "trivia": "A voz do protagonista foi inteiramente regravada por Mike Myers com sotaque escocês quando a animação já estava praticamente finalizada.",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/anim_03-1.jpg",
        "alt": "Uma criatura verde sai de uma pequena casa de madeira no pântano."
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/anim_03-2.jpg",
        "alt": "Um ogro e um burro caminham por uma cidade medieval."
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/anim_03-3.jpg",
        "alt": "Uma princesa e um ogro conversam diante de uma paisagem ensolarada."
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/anim_03-4.jpg",
        "alt": "Um ogro, uma princesa, um burro e um pequeno lorde na cidade."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/anim_03-5.jpg",
        "alt": "Um grupo foge de um dragão sobre uma ponte."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/anim_03-6.jpg",
        "alt": "Um ogro verde e seu amigo burro sorriem juntos."
      }
    ],
    "synopsis": "Para recuperar a tranquilidade do seu pântano, um ogro aceita resgatar uma princesa acompanhado por um burro falante. A missão desafia suas ideias sobre amizade, beleza e os finais felizes dos contos de fadas."
  },
  {
    "id": "act_01",
    "title": "Batman: O Cavaleiro das Trevas",
    "originalTitle": "The Dark Knight",
    "category": "acao",
    "categoryName": "AÇÃO E AVENTURA",
    "year": 2008,
    "director": "Christopher Nolan",
    "initialHint": "Uma cidade coloca suas esperanças em figuras muito diferentes de justiça.",
    "trivia": "Heath Ledger improvisou várias ações que se tornaram lendárias, como bater palmas dentro da cela quando Gordon foi promovido a comissário.",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/act_01-1.jpg",
        "alt": "Um vigilante entre escombros iluminados por fogo."
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/act_01-2.jpg",
        "alt": "Um homem maquiado olha pela janela de um carro da polícia."
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/act_01-3.jpg",
        "alt": "Um homem com maquiagem de palhaço em uma cela."
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/act_01-4.jpg",
        "alt": "Um vigilante e seu inimigo se encaram numa sala de interrogatório."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/act_01-5.jpg",
        "alt": "Um herói com capa e orelhas pontudas diante de um edifício."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/act_01-6.jpg",
        "alt": "Um herói mascarado diante de um símbolo de morcego em chamas."
      }
    ],
    "synopsis": "Batman tenta conter o crime de Gotham ao lado do promotor Harvey Dent e do tenente Gordon. Um criminoso que se apresenta como Coringa transforma a cidade num campo de testes para os limites morais de seus defensores."
  },
  {
    "id": "act_02",
    "title": "Gladiador",
    "originalTitle": "Gladiator",
    "category": "acao",
    "categoryName": "AÇÃO E AVENTURA",
    "year": 2000,
    "director": "Ridley Scott",
    "initialHint": "Depois de perder sua posição, um homem precisa conquistar uma multidão para enfrentar o poder.",
    "trivia": "Os tigres na arena de combate eram reais: Russell Crowe ficou a menos de um metro de distância de um deles, mantido preso por correntes no chão.",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/act_02-1.jpg",
        "alt": "Uma figura caminha por um campo sob um céu noturno."
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/act_02-2.jpg",
        "alt": "Uma mulher e um imperador conversam perto de um trono."
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/act_02-3.jpg",
        "alt": "Um jovem imperador observa a arena."
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/act_02-4.jpg",
        "alt": "Guerreiros enfrentam um tigre na arena."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/act_02-5.jpg",
        "alt": "Um combatente de elmo metálico diante das arquibancadas."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/act_02-6.jpg",
        "alt": "Um guerreiro de armadura no centro de uma arena romana."
      }
    ],
    "synopsis": "Traído após a morte do imperador, um general romano perde sua posição e acaba vendido como escravo. Sua habilidade nas arenas o aproxima de Roma e da possibilidade de enfrentar o homem que destruiu sua família."
  },
  {
    "id": "cl_01",
    "title": "Pulp Fiction",
    "originalTitle": "Pulp Fiction",
    "category": "classicos",
    "categoryName": "CLÁSSICOS DO CINEMA",
    "year": 1994,
    "director": "Quentin Tarantino",
    "initialHint": "As histórias de vários desconhecidos se cruzam em uma sequência nada convencional.",
    "trivia": "A famosa maleta continha apenas uma lâmpada laranja de alta intensidade ligada a uma bateria para iluminar os rostos dos atores com brilho dourado.",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/cl_01-1.jpg",
        "alt": "Uma mulher de cabelo curto fuma sentada em uma lanchonete."
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/cl_01-2.jpg",
        "alt": "Um homem e uma mulher observam algo à frente."
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/cl_01-3.jpg",
        "alt": "Dois homens de terno conversam ao ar livre."
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/cl_01-4.jpg",
        "alt": "Um casal dança em uma lanchonete retrô."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/cl_01-5.jpg",
        "alt": "Dois homens de terno preto em um apartamento."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/cl_01-6.jpg",
        "alt": "Os dois homens de terno apontam suas armas."
      }
    ],
    "synopsis": "As histórias de dois assassinos, um boxeador e pessoas ligadas ao submundo de Los Angeles se cruzam em situações violentas e absurdas. A narrativa acompanha encontros e decisões que mudam o destino desses personagens."
  },
  {
    "id": "cl_02",
    "title": "Clube da Luta",
    "originalTitle": "Fight Club",
    "category": "classicos",
    "categoryName": "CLÁSSICOS DO CINEMA",
    "year": 1999,
    "director": "David Fincher",
    "initialHint": "Uma amizade transforma a vida de um homem insatisfeito com sua rotina.",
    "trivia": "Brad Pitt e Edward Norton tiveram aulas intensivas de boxe, taekwondo e grappling e aprenderam a fazer sabão real antes do início das filmagens.",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/cl_02-1.jpg",
        "alt": "Duas pessoas de mãos dadas observam a cidade por uma janela."
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/cl_02-2.jpg",
        "alt": "Um homem de óculos escuros aguarda em um balcão de aeroporto."
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/cl_02-3.jpg",
        "alt": "Dois homens conversam perto de uma porta metálica."
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/cl_02-4.jpg",
        "alt": "Dois homens descansam juntos à noite."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/cl_02-5.jpg",
        "alt": "Um homem com camisa estampada e jaqueta vermelha."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/cl_02-6.jpg",
        "alt": "Homens se reúnem em um porão em torno de um lutador."
      }
    ],
    "synopsis": "Um homem insatisfeito com a vida conhece um vendedor carismático e funda com ele um clube clandestino de lutas. O que começa como uma fuga da rotina cresce até assumir proporções que ele já não consegue controlar."
  },
  {
    "id": "ser_01",
    "title": "Breaking Bad",
    "originalTitle": "Breaking Bad",
    "category": "series",
    "categoryName": "SÉRIES DE TV",
    "year": 2008,
    "director": "Vince Gilligan",
    "initialHint": "Uma decisão tomada para ajudar a família acaba transformando completamente a vida de um professor.",
    "trivia": "A famosa tomada em que Walter White arremessa a pizza inteira sobre o telhado de sua casa foi gravada e acertada na primeira tentativa.",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/ser_01-1.jpg",
        "alt": "Um homem observa dinheiro girando dentro de uma máquina."
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/ser_01-2.jpg",
        "alt": "Dois homens de roupas de proteção amarelas descansam no sofá."
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/ser_01-3.jpg",
        "alt": "Dois homens em cadeiras de jardim no meio do deserto."
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/ser_01-4.jpg",
        "alt": "Dois homens com máscaras e roupas de proteção olham para dentro de um recipiente."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/ser_01-5.jpg",
        "alt": "A dupla veste macacões laranja em um laboratório."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/ser_01-6.jpg",
        "alt": "Um homem de óculos, cabeça raspada e cavanhaque encara a câmera."
      }
    ],
    "synopsis": "Após receber um diagnóstico de câncer, um professor de química começa a fabricar metanfetamina com um antigo aluno. A tentativa de garantir dinheiro para a família o envolve cada vez mais num mundo de violência, ambição e escolhas perigosas."
  },
  {
    "id": "com_01",
    "title": "Curtindo a Vida Adoidado",
    "originalTitle": "Ferris Bueller's Day Off",
    "category": "comedia",
    "categoryName": "COMÉDIA E NACIONAL",
    "year": 1986,
    "director": "John Hughes",
    "initialHint": "Três amigos resolvem aproveitar um dia que deveria ter sido comum.",
    "trivia": "A lendária Ferrari vermelha de 1961 era tão valiosa que foram construídas três réplicas de fibra de vidro para as filmagens.",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/com_01-1.jpg",
        "alt": "Visitantes observam um enorme vitral azul em um museu."
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/com_01-2.jpg",
        "alt": "Três jovens atravessam uma galeria de museu."
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/com_01-3.jpg",
        "alt": "Três amigos imitam poses entre obras de arte."
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/com_01-4.jpg",
        "alt": "Um rapaz contempla seu reflexo na água."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/com_01-5.jpg",
        "alt": "Três amigos observam quadros em um museu."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/com_01-6.jpg",
        "alt": "Um jovem de colete e óculos escuros descansa num carro esportivo vermelho."
      }
    ],
    "synopsis": "Um estudante decide faltar à escola e passar um dia inesquecível em Chicago com a namorada e o melhor amigo. Enquanto aproveitam a cidade, eles precisam escapar das suspeitas da família e da perseguição do diretor."
  },
  {
    "id": "com_02",
    "title": "O Auto da Compadecida",
    "originalTitle": "O Auto da Compadecida",
    "category": "comedia",
    "categoryName": "COMÉDIA E NACIONAL",
    "year": 2000,
    "director": "Guel Arraes",
    "initialHint": "Dois amigos sobrevivem com criatividade, conversa e muita sorte numa pequena cidade.",
    "trivia": "Adaptação da consagrada peça teatral de Ariano Suassuna de 1955, as gravações foram realizadas no município de Cabaceiras, no Cariri paraibano.",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/com_02-1.jpg",
        "alt": "Detalhe das roupas e dos sapatos de um grupo sentado num banco.",
        "zoom": 3,
        "origin": "65% 95%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/com_02-2.jpg",
        "alt": "Detalhe da paisagem seca do sertão ao fundo de uma conversa.",
        "zoom": 3,
        "origin": "5% 15%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/com_02-3.jpg",
        "alt": "Detalhe das roupas simples de dois viajantes no sertão.",
        "zoom": 3,
        "origin": "50% 95%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/com_02-4.jpg",
        "alt": "Quatro personagens sentados em um banco junto a uma parede azul."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/com_02-5.jpg",
        "alt": "Dois homens de roupas simples conversam em uma paisagem de caatinga."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/com_02-6.jpg",
        "alt": "A dupla de amigos João Grilo e Chicó no sertão."
      }
    ],
    "synopsis": "João Grilo e Chicó sobrevivem no sertão usando esperteza, histórias e pequenos golpes. Suas confusões envolvem os moradores da cidade e acabam levando a dupla a um julgamento em que cada um precisa responder por seus atos."
  },
  {
    "id": "personal_000",
    "title": "Mayor of Kingstown",
    "originalTitle": "Mayor of Kingstown",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2021,
    "director": "Taylor Sheridan & Hugh Dillon",
    "initialHint": "Numa cidade marcada pelas prisões, uma família intermedeia conflitos entre lados perigosos.",
    "trivia": "Jeremy Renner interpreta Mike McLusky, um mediador que tenta manter o equilíbrio em Kingstown.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/97951",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_000-1.jpg",
        "alt": "Detalhe ampliado: Homem sentado num galpão.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_000-2.jpg",
        "alt": "Detalhe ampliado: Homem de terno num pátio industrial.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_000-3.jpg",
        "alt": "Detalhe ampliado: Homem diante de um incêndio.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_000-1.jpg",
        "alt": "Homem sentado num galpão."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_000-2.jpg",
        "alt": "Homem de terno num pátio industrial."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_000-3.jpg",
        "alt": "Homem diante de um incêndio."
      }
    ],
    "synopsis": "Em Kingstown, uma cidade cuja economia gira em torno das prisões, a família McLusky atua entre policiais, detentos e criminosos. Mike tenta administrar alianças frágeis num ambiente marcado por corrupção e disputas de poder."
  },
  {
    "id": "personal_001",
    "title": "Percy Jackson e os Olimpianos",
    "originalTitle": "Percy Jackson and the Olympians",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2023,
    "director": "Rick Riordan & Jonathan E. Steinberg",
    "initialHint": "Um adolescente descobre que sua família tem ligação com antigas divindades.",
    "trivia": "A série adapta os livros de Rick Riordan sobre um jovem semideus e seus companheiros.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/103540",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_001-1.jpg",
        "alt": "Detalhe ampliado: Três jovens numa sala iluminada em azul.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_001-2.jpg",
        "alt": "Detalhe ampliado: Rapaz entre ondas na praia.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_001-3.jpg",
        "alt": "Detalhe ampliado: Três jovens à beira-mar.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_001-1.jpg",
        "alt": "Três jovens numa sala iluminada em azul."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_001-2.jpg",
        "alt": "Rapaz entre ondas na praia."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_001-3.jpg",
        "alt": "Três jovens à beira-mar."
      }
    ],
    "synopsis": "Percy descobre que é filho de um deus grego e que os mitos fazem parte do mundo real. Ao lado de Annabeth e Grover, ele parte numa missão para recuperar um objeto roubado e impedir um conflito entre os deuses."
  },
  {
    "id": "personal_002",
    "title": "Chaves",
    "originalTitle": "El Chavo del Ocho",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 1973,
    "director": "Roberto Gómez Bolaños",
    "initialHint": "Uma vizinhança simples vira palco de confusões por motivos muito pequenos.",
    "trivia": "Roberto Gómez Bolaños criou e interpretou o menino do barril, acompanhado por Quico, Chiquinha e Seu Madruga.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/47",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_002-1.jpg",
        "alt": "Detalhe ampliado: Menino atrás de uma mesa no pátio.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_002-2.jpg",
        "alt": "Detalhe ampliado: Menino de camiseta listrada gesticula.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_002-3.jpg",
        "alt": "Detalhe ampliado: Vizinhos reunidos numa vila.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_002-1.jpg",
        "alt": "Menino atrás de uma mesa no pátio."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_002-2.jpg",
        "alt": "Menino de camiseta listrada gesticula."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_002-3.jpg",
        "alt": "Vizinhos reunidos numa vila."
      }
    ],
    "synopsis": "Um menino pobre vive numa vila e se envolve nas confusões de seus vizinhos. Entre brincadeiras, mal-entendidos e disputas por comida, ele divide o cotidiano com Quico, Chiquinha, Seu Madruga e outros moradores."
  },
  {
    "id": "personal_003",
    "title": "Por Que Eu Me Casei de Novo?",
    "originalTitle": "Why Did I Get Married Again?",
    "category": "romance",
    "categoryName": "ROMANCE",
    "year": 2026,
    "director": "Tyler Perry",
    "initialHint": "Um reencontro de casais coloca antigas certezas sobre casamento à prova.",
    "trivia": "Tyler Perry retorna ao universo de amigos que discutem confiança, compromisso e vida a dois.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/1522689",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_003-1.jpg",
        "alt": "Detalhe ampliado: Grupo num saguão de hotel.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_003-2.jpg",
        "alt": "Detalhe ampliado: Casal conversa numa mesa ao ar livre.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_003-3.jpg",
        "alt": "Detalhe ampliado: Homem de camisa branca numa festa.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_003-1.jpg",
        "alt": "Grupo num saguão de hotel."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_003-2.jpg",
        "alt": "Casal conversa numa mesa ao ar livre."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_003-3.jpg",
        "alt": "Homem de camisa branca numa festa."
      }
    ],
    "synopsis": "Amigos voltam a se reunir em torno de uma celebração de casamento. O reencontro coloca suas relações sob pressão e reacende dúvidas sobre confiança, compromisso e o que cada casal espera da vida a dois."
  },
  {
    "id": "personal_004",
    "title": "Avatar: O Último Mestre do Ar",
    "originalTitle": "Avatar: The Last Airbender",
    "category": "ficcao",
    "categoryName": "FICÇÃO E FANTASIA",
    "year": 2024,
    "director": "Albert Kim",
    "initialHint": "Um jovem precisa aprender habilidades muito diferentes para restaurar o equilíbrio.",
    "trivia": "A adaptação em live-action acompanha Aang, Katara e Sokka num mundo dividido entre quatro elementos.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/82452",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_004-1.jpg",
        "alt": "Detalhe ampliado: Aldeia cercada por montanhas.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_004-2.jpg",
        "alt": "Detalhe ampliado: Guerreiro com o rosto pintado.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_004-3.jpg",
        "alt": "Detalhe ampliado: Jovem monge e uma criatura voadora.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_004-1.jpg",
        "alt": "Aldeia cercada por montanhas."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_004-2.jpg",
        "alt": "Guerreiro com o rosto pintado."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_004-3.jpg",
        "alt": "Jovem monge e uma criatura voadora."
      }
    ],
    "synopsis": "Num mundo dividido entre povos ligados à água, terra, fogo e ar, o jovem Aang precisa dominar os quatro elementos. Com Katara e Sokka, ele enfrenta a expansão da Nação do Fogo e tenta restaurar o equilíbrio."
  },
  {
    "id": "personal_005",
    "title": "Jogo Bonito",
    "originalTitle": "The Beautiful Game",
    "category": "esportes",
    "categoryName": "ESPORTES E DOCUMENTÁRIOS",
    "year": 2024,
    "director": "Thea Sharrock",
    "initialHint": "O esporte leva um grupo improvável a representar seu país longe de casa.",
    "trivia": "Uma equipe de jogadores sem moradia participa de um torneio internacional de futebol.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/857655",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_005-1.jpg",
        "alt": "Detalhe ampliado: Treinador conversa com um jogador.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_005-2.jpg",
        "alt": "Detalhe ampliado: Jogador chuta uma bola.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_005-3.jpg",
        "alt": "Detalhe ampliado: Equipe caminha por uma praça italiana.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_005-1.jpg",
        "alt": "Treinador conversa com um jogador."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_005-2.jpg",
        "alt": "Jogador chuta uma bola."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_005-3.jpg",
        "alt": "Equipe caminha por uma praça italiana."
      }
    ],
    "synopsis": "Um treinador leva uma equipe inglesa de jogadores sem moradia a um torneio internacional de futebol em Roma. A convivência aproxima pessoas com histórias difíceis e transforma a competição numa oportunidade de reconstruir vínculos e confiança."
  },
  {
    "id": "personal_006",
    "title": "Space Force",
    "originalTitle": "Space Force",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2020,
    "director": "Greg Daniels & Steve Carell",
    "initialHint": "Um militar recebe uma missão que parece tão política quanto científica.",
    "trivia": "Steve Carell interpreta o general Mark Naird, responsável por organizar uma nova força espacial.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/85922",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_006-1.jpg",
        "alt": "Detalhe ampliado: Militar num escritório.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_006-2.jpg",
        "alt": "Detalhe ampliado: General de uniforme.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_006-3.jpg",
        "alt": "Detalhe ampliado: Equipe num corredor de uma base.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_006-1.jpg",
        "alt": "Militar num escritório."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_006-2.jpg",
        "alt": "General de uniforme."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_006-3.jpg",
        "alt": "Equipe num corredor de uma base."
      }
    ],
    "synopsis": "Um general recebe a tarefa de comandar uma nova força militar dedicada ao espaço. Entre metas políticas, desafios científicos e problemas familiares, ele tenta dar sentido a uma missão cercada de expectativas e decisões absurdas."
  },
  {
    "id": "personal_007",
    "title": "Homem-Aranha: Longe de Casa",
    "originalTitle": "Spider-Man: Far From Home",
    "category": "acao",
    "categoryName": "AÇÃO E AVENTURA",
    "year": 2019,
    "director": "Jon Watts",
    "initialHint": "Uma excursão escolar ao exterior deixa de ser uma viagem comum.",
    "trivia": "Peter Parker viaja à Europa com os colegas enquanto uma nova ameaça o força a vestir o uniforme.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/429617",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_007-1.jpg",
        "alt": "Detalhe ampliado: Herói pendurado numa ponte.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_007-2.jpg",
        "alt": "Detalhe ampliado: Jovem e herói mascarado.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_007-3.jpg",
        "alt": "Detalhe ampliado: Rapaz diante de projeções de armaduras.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_007-1.jpg",
        "alt": "Herói pendurado numa ponte."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_007-2.jpg",
        "alt": "Jovem e herói mascarado."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_007-3.jpg",
        "alt": "Rapaz diante de projeções de armaduras."
      }
    ],
    "synopsis": "Peter Parker espera aproveitar uma excursão pela Europa com os colegas e se aproximar de MJ. Seus planos mudam quando Nick Fury pede ajuda contra novas ameaças e um herói misterioso entra em cena."
  },
  {
    "id": "personal_008",
    "title": "Armadas e Perigosas",
    "originalTitle": "The Heat",
    "category": "comedia",
    "categoryName": "COMÉDIA",
    "year": 2013,
    "director": "Paul Feig",
    "initialHint": "Duas profissionais de estilos opostos precisam trabalhar juntas numa investigação.",
    "trivia": "Sandra Bullock e Melissa McCarthy formam a dupla de policiais de The Heat, também divulgado como As Bem-Armadas.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/136795",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_008-1.jpg",
        "alt": "Detalhe ampliado: Duas mulheres num corredor.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_008-2.jpg",
        "alt": "Detalhe ampliado: Duas mulheres no chão com uma arma.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_008-3.jpg",
        "alt": "Detalhe ampliado: Duas mulheres num bar.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_008-1.jpg",
        "alt": "Duas mulheres num corredor."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_008-2.jpg",
        "alt": "Duas mulheres no chão com uma arma."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_008-3.jpg",
        "alt": "Duas mulheres num bar."
      }
    ],
    "synopsis": "Uma agente do FBI metódica precisa colaborar com uma policial de Boston que trabalha de maneira impulsiva. A investigação de uma rede criminosa obriga as duas a superar o choque de personalidades e confiar uma na outra."
  },
  {
    "id": "personal_009",
    "title": "Chicago P.D.",
    "originalTitle": "Chicago P.D.",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2014,
    "director": "Dick Wolf & Matt Olmstead",
    "initialHint": "Uma equipe policial enfrenta crimes e dilemas numa grande cidade americana.",
    "trivia": "A série acompanha a unidade de inteligência comandada por Hank Voight em Chicago.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/58841",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_009-1.jpg",
        "alt": "Detalhe ampliado: Homem num galpão.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_009-2.jpg",
        "alt": "Detalhe ampliado: Policiais sob luzes azuis.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_009-3.jpg",
        "alt": "Detalhe ampliado: Equipe de policiais na rua.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_009-1.jpg",
        "alt": "Homem num galpão."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_009-2.jpg",
        "alt": "Policiais sob luzes azuis."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_009-3.jpg",
        "alt": "Equipe de policiais na rua."
      }
    ],
    "synopsis": "A unidade de inteligência da polícia de Chicago investiga crimes graves sob o comando de Hank Voight. Seus integrantes enfrentam riscos nas ruas e conflitos entre os métodos que usam, a lei e suas vidas pessoais."
  },
  {
    "id": "personal_010",
    "title": "Adriano Imperador",
    "originalTitle": "Adriano Imperador",
    "category": "esportes",
    "categoryName": "ESPORTES E DOCUMENTÁRIOS",
    "year": 2022,
    "director": "",
    "initialHint": "A trajetória de um atleta passa por conquistas, perdas e uma forte ligação com suas origens.",
    "trivia": "A produção acompanha a vida e a carreira do atacante brasileiro conhecido como Imperador.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/205426",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_010-1.jpg",
        "alt": "Detalhe ampliado: Homem sentado ao ar livre.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_010-2.jpg",
        "alt": "Detalhe ampliado: Homem conversa numa comunidade.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_010-3.jpg",
        "alt": "Detalhe ampliado: Retrato de um homem de óculos.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_010-1.jpg",
        "alt": "Homem sentado ao ar livre."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_010-2.jpg",
        "alt": "Homem conversa numa comunidade."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_010-3.jpg",
        "alt": "Retrato de um homem de óculos."
      }
    ],
    "synopsis": "A série documental acompanha a trajetória de Adriano, das origens no Rio de Janeiro ao destaque no futebol internacional. O relato aborda conquistas, relações familiares e dificuldades que marcaram a vida do jogador fora dos campos."
  },
  {
    "id": "personal_011",
    "title": "Vizinhos",
    "originalTitle": "Vizinhos",
    "category": "comedia",
    "categoryName": "COMÉDIA",
    "year": 2022,
    "director": "Roberto Santucci",
    "initialHint": "Um homem troca a cidade pelo sossego, mas encontra barulho do outro lado do muro.",
    "trivia": "Leandro Hassum interpreta Walter nesta comédia brasileira sobre uma mudança que não traz a paz esperada.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/818502",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_011-1.jpg",
        "alt": "Detalhe ampliado: Dois vizinhos separados por uma cerca.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_011-2.jpg",
        "alt": "Detalhe ampliado: Moradores lado a lado diante de casas.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_011-1.jpg",
        "alt": "Detalhe ampliado: Dois vizinhos separados por uma cerca.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_011-2.jpg",
        "alt": "Detalhe ampliado: Moradores lado a lado diante de casas.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_011-1.jpg",
        "alt": "Dois vizinhos separados por uma cerca."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_011-2.jpg",
        "alt": "Moradores lado a lado diante de casas."
      }
    ],
    "synopsis": "Walter deixa a cidade grande em busca de uma vida mais tranquila com a família. Mas a mudança para uma casa nova o coloca ao lado de um vizinho barulhento, iniciando uma sequência de conflitos e situações inesperadas."
  },
  {
    "id": "personal_012",
    "title": "Divisão Palermo",
    "originalTitle": "División Palermo",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2023,
    "director": "Santiago Korovsky",
    "initialHint": "Uma iniciativa para melhorar a imagem da polícia gera problemas inesperados.",
    "trivia": "A comédia argentina acompanha uma equipe civil de patrulhamento urbano que acaba envolvida num crime.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/219066",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_012-1.jpg",
        "alt": "Detalhe ampliado: Equipe numa sala de trabalho.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_012-2.jpg",
        "alt": "Detalhe ampliado: Homem segura uma arma entre confetes.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_012-1.jpg",
        "alt": "Detalhe ampliado: Equipe numa sala de trabalho.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_012-2.jpg",
        "alt": "Detalhe ampliado: Homem segura uma arma entre confetes.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_012-1.jpg",
        "alt": "Equipe numa sala de trabalho."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_012-2.jpg",
        "alt": "Homem segura uma arma entre confetes."
      }
    ],
    "synopsis": "Uma patrulha civil é criada para melhorar a imagem da polícia e aproximá-la da população. Formada por pessoas sem experiência, a equipe se envolve numa investigação criminosa que ultrapassa muito suas funções previstas."
  },
  {
    "id": "personal_013",
    "title": "Mourinho",
    "originalTitle": "Mourinho",
    "category": "esportes",
    "categoryName": "ESPORTES E DOCUMENTÁRIOS",
    "year": 2026,
    "director": "",
    "initialHint": "Uma personalidade do futebol é observada para além da beira do campo.",
    "trivia": "O documentário se concentra no treinador português José Mourinho e em sua trajetória profissional.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/329274",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_013-1.jpg",
        "alt": "Detalhe ampliado: Treinador diante de uma multidão.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_013-2.jpg",
        "alt": "Detalhe ampliado: Treinador gesticula no campo.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_013-3.jpg",
        "alt": "Detalhe ampliado: Retrato de um treinador.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_013-1.jpg",
        "alt": "Treinador diante de uma multidão."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_013-2.jpg",
        "alt": "Treinador gesticula no campo."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_013-3.jpg",
        "alt": "Retrato de um treinador."
      }
    ],
    "synopsis": "O documentário acompanha José Mourinho e revisita sua carreira no futebol. A produção explora o trabalho do treinador, sua personalidade e a pressão que cerca a busca por resultados dentro e fora dos grandes clubes."
  },
  {
    "id": "personal_014",
    "title": "O Falcão do Golfe",
    "originalTitle": "The Hawk",
    "category": "esportes",
    "categoryName": "ESPORTES E DOCUMENTÁRIOS",
    "year": 2026,
    "director": "Will Ferrell & Harper Steele & Chris Henchy",
    "initialHint": "Um nome do esporte tenta encontrar espaço numa fase diferente da carreira.",
    "trivia": "Will Ferrell vive um veterano do golfe que busca recuperar relevância e confiança.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/254528",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_014-1.jpg",
        "alt": "Detalhe ampliado: Golfista perto de um microfone.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_014-2.jpg",
        "alt": "Detalhe ampliado: Golfista diante de uma plateia.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_014-1.jpg",
        "alt": "Detalhe ampliado: Golfista perto de um microfone.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_014-2.jpg",
        "alt": "Detalhe ampliado: Golfista diante de uma plateia.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_014-1.jpg",
        "alt": "Golfista perto de um microfone."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_014-2.jpg",
        "alt": "Golfista diante de uma plateia."
      }
    ],
    "synopsis": "Um veterano do golfe tenta recuperar o prestígio e provar que ainda pode competir. Ao enfrentar uma nova fase da carreira, ele precisa lidar com a própria confiança e com um esporte que mudou ao seu redor."
  },
  {
    "id": "personal_015",
    "title": "Isso É um Bolo? Vamos Celebrar!",
    "originalTitle": "Is It Cake? Holiday",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2024,
    "director": "",
    "initialHint": "Uma competição culinária ganha decoração e desafios de fim de ano.",
    "trivia": "Confeiteiros criam bolos que imitam objetos natalinos nesta edição de Is It Cake?.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/275144",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_015-1.jpg",
        "alt": "Detalhe ampliado: Bolo decorado com árvores de Natal.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_015-2.jpg",
        "alt": "Detalhe ampliado: Apresentador segura uma faca no estúdio.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_015-3.jpg",
        "alt": "Detalhe ampliado: Participantes num cenário natalino.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_015-1.jpg",
        "alt": "Bolo decorado com árvores de Natal."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_015-2.jpg",
        "alt": "Apresentador segura uma faca no estúdio."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_015-3.jpg",
        "alt": "Participantes num cenário natalino."
      }
    ],
    "synopsis": "Confeiteiros criam bolos tão realistas que podem ser confundidos com objetos de Natal. Em cada desafio, os participantes tentam enganar os jurados e avançar numa competição que mistura técnica, criatividade e ilusões comestíveis."
  },
  {
    "id": "personal_016",
    "title": "Jovem Sheldon",
    "originalTitle": "Young Sheldon",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2017,
    "director": "Steven Molaro & Chuck Lorre",
    "initialHint": "Um menino muito inteligente nem sempre entende as pessoas à sua volta.",
    "trivia": "A comédia mostra a infância de Sheldon Cooper no Texas, com sua família e sua vida escolar.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/71728",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_016-1.jpg",
        "alt": "Detalhe ampliado: Retrato de família entre livros.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_016-2.jpg",
        "alt": "Detalhe ampliado: Família sentada no sofá.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_016-3.jpg",
        "alt": "Detalhe ampliado: Menino usando gravata-borboleta.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_016-1.jpg",
        "alt": "Retrato de família entre livros."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_016-2.jpg",
        "alt": "Família sentada no sofá."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_016-3.jpg",
        "alt": "Menino usando gravata-borboleta."
      }
    ],
    "synopsis": "Sheldon Cooper cresce no Texas com uma inteligência muito acima da média e dificuldades para compreender as convenções sociais. Sua família tenta acompanhar a rotina de um menino que vive entre os desafios da infância e do mundo acadêmico."
  },
  {
    "id": "personal_017",
    "title": "Animal",
    "originalTitle": "Animal",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2025,
    "director": "Víctor García León",
    "initialHint": "Um profissional acostumado ao campo precisa se adaptar a clientes muito diferentes.",
    "trivia": "O veterinário Antón passa a trabalhar num estabelecimento voltado a animais de estimação mimados.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/243200",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_017-1.jpg",
        "alt": "Detalhe ampliado: Veterinário segura uma cabra.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_017-2.jpg",
        "alt": "Detalhe ampliado: Homem e mulher lado a lado.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_017-1.jpg",
        "alt": "Detalhe ampliado: Veterinário segura uma cabra.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_017-2.jpg",
        "alt": "Detalhe ampliado: Homem e mulher lado a lado.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_017-1.jpg",
        "alt": "Veterinário segura uma cabra."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_017-2.jpg",
        "alt": "Homem e mulher lado a lado."
      }
    ],
    "synopsis": "Um veterinário do interior passa a trabalhar numa clínica moderna ligada à família. A mudança o obriga a se adaptar a novos colegas, pacientes e formas de cuidar dos animais, enquanto tenta encontrar seu lugar nessa rotina."
  },
  {
    "id": "personal_018",
    "title": "Brooklyn Nine-Nine",
    "originalTitle": "Brooklyn Nine-Nine",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2013,
    "director": "Daniel J. Goor & Michael Schur",
    "initialHint": "Uma equipe transforma o trabalho cotidiano em competição, amizade e confusão.",
    "trivia": "Jake Peralta, Amy Santiago e o capitão Holt trabalham numa delegacia do Brooklyn.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/48891",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_018-1.jpg",
        "alt": "Detalhe ampliado: Investigadores atrás de uma mesa.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_018-2.jpg",
        "alt": "Detalhe ampliado: Equipe reunida sob uma ponte.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_018-3.jpg",
        "alt": "Detalhe ampliado: Colegas sentados num sofá.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_018-1.jpg",
        "alt": "Investigadores atrás de uma mesa."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_018-2.jpg",
        "alt": "Equipe reunida sob uma ponte."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_018-3.jpg",
        "alt": "Colegas sentados num sofá."
      }
    ],
    "synopsis": "Uma delegacia do Brooklyn reúne investigadores competentes e personalidades muito diferentes. A chegada de um capitão rigoroso muda a rotina de Jake Peralta e da equipe, que divide o tempo entre casos policiais, amizades e confusões."
  },
  {
    "id": "personal_019",
    "title": "Rick and Morty",
    "originalTitle": "Rick and Morty",
    "category": "animacao",
    "categoryName": "ANIMAÇÃO",
    "year": 2013,
    "director": "Dan Harmon & Justin Roiland",
    "initialHint": "As viagens de uma dupla entre mundos quase nunca seguem um plano seguro.",
    "trivia": "Um cientista excêntrico leva o neto em aventuras por planetas e realidades alternativas.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/60625",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_019-1.jpg",
        "alt": "Detalhe ampliado: Portal verde numa garagem.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_019-2.jpg",
        "alt": "Detalhe ampliado: Família à mesa de jantar.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_019-3.jpg",
        "alt": "Detalhe ampliado: Avô e neto atravessam um portal.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_019-1.jpg",
        "alt": "Portal verde numa garagem."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_019-2.jpg",
        "alt": "Família à mesa de jantar."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_019-3.jpg",
        "alt": "Avô e neto atravessam um portal."
      }
    ],
    "synopsis": "Um cientista genial e irresponsável arrasta o neto para viagens entre planetas e dimensões. As aventuras colocam os dois em situações absurdas e perigosas, frequentemente trazendo consequências para toda a família."
  },
  {
    "id": "personal_020",
    "title": "Família Upshaw",
    "originalTitle": "The Upshaws",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2021,
    "director": "Regina Y. Hicks & Wanda Sykes",
    "initialHint": "Uma família tenta resolver problemas de dinheiro e convivência com muito improviso.",
    "trivia": "A sitcom acompanha uma família negra de Indiana, com Mike Epps, Kim Fields e Wanda Sykes.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/121509",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_020-1.jpg",
        "alt": "Detalhe ampliado: Família numa cozinha.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_020-2.jpg",
        "alt": "Detalhe ampliado: Casal se abraça.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_020-3.jpg",
        "alt": "Detalhe ampliado: Dois homens numa oficina.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_020-1.jpg",
        "alt": "Família numa cozinha."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_020-2.jpg",
        "alt": "Casal se abraça."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_020-3.jpg",
        "alt": "Dois homens numa oficina."
      }
    ],
    "synopsis": "Uma família de trabalhadores de Indiana tenta equilibrar contas, relacionamentos e a criação dos filhos. À frente de uma oficina, Bennie enfrenta os próprios erros enquanto seus parentes se apoiam e se provocam no cotidiano."
  },
  {
    "id": "personal_021",
    "title": "Arremessando Alto",
    "originalTitle": "Hustle",
    "category": "esportes",
    "categoryName": "ESPORTES E DOCUMENTÁRIOS",
    "year": 2022,
    "director": "Jeremiah Zagar",
    "initialHint": "Uma descoberta longe de casa pode mudar a carreira de dois homens ligados ao esporte.",
    "trivia": "Adam Sandler interpreta um olheiro de basquete que encontra um jogador promissor na Espanha.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/705861",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_021-1.jpg",
        "alt": "Detalhe ampliado: Homem numa rua iluminada à noite.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_021-2.jpg",
        "alt": "Detalhe ampliado: Treinador e jogador numa quadra.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_021-3.jpg",
        "alt": "Detalhe ampliado: Jogadores treinando basquete.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_021-1.jpg",
        "alt": "Homem numa rua iluminada à noite."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_021-2.jpg",
        "alt": "Treinador e jogador numa quadra."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_021-3.jpg",
        "alt": "Jogadores treinando basquete."
      }
    ],
    "synopsis": "Um olheiro de basquete descobre um jogador talentoso na Espanha e decide levá-lo aos Estados Unidos. Os dois desafiam o sistema profissional numa tentativa de provar seu valor e conquistar uma oportunidade na NBA."
  },
  {
    "id": "personal_022",
    "title": "One Day at a Time",
    "originalTitle": "One Day at a Time",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2017,
    "director": "Mike Royce & Gloria Calderón Kellett",
    "initialHint": "Três gerações dividem uma casa e opiniões muito diferentes sobre a vida.",
    "trivia": "A versão de 2017 acompanha uma família cubano-americana, com Justina Machado e Rita Moreno.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/69017",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_022-1.jpg",
        "alt": "Detalhe ampliado: Mãe e filha na cozinha.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_022-2.jpg",
        "alt": "Detalhe ampliado: Família na sala.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_022-3.jpg",
        "alt": "Detalhe ampliado: Família conversa à mesa.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_022-1.jpg",
        "alt": "Mãe e filha na cozinha."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_022-2.jpg",
        "alt": "Família na sala."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_022-3.jpg",
        "alt": "Família conversa à mesa."
      }
    ],
    "synopsis": "Uma enfermeira e veterana do Exército cria dois filhos com a ajuda da mãe cubana. A família enfrenta desafios de trabalho, saúde, identidade e convivência, encontrando no humor e no apoio mútuo formas de seguir em frente."
  },
  {
    "id": "personal_023",
    "title": "Cozinhando o Impossível",
    "originalTitle": "Baking Impossible",
    "category": "programas",
    "categoryName": "PROGRAMAS E REALITY",
    "year": 2021,
    "director": "",
    "initialHint": "Duas especialidades precisam trabalhar juntas para fazer algo bonito e funcional.",
    "trivia": "Confeiteiros e engenheiros montam estruturas comestíveis que precisam passar por testes reais.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/133090",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_023-1.jpg",
        "alt": "Detalhe ampliado: Estrutura com a forma de um unicórnio.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_023-2.jpg",
        "alt": "Detalhe ampliado: Participante com uma máquina comestível.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_023-1.jpg",
        "alt": "Detalhe ampliado: Estrutura com a forma de um unicórnio.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_023-2.jpg",
        "alt": "Detalhe ampliado: Participante com uma máquina comestível.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_023-1.jpg",
        "alt": "Estrutura com a forma de um unicórnio."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_023-2.jpg",
        "alt": "Participante com uma máquina comestível."
      }
    ],
    "synopsis": "Confeiteiros e engenheiros trabalham em dupla para criar estruturas comestíveis capazes de cumprir tarefas. Os desafios exigem que as invenções funcionem de verdade e também impressionem pelo sabor e pela apresentação."
  },
  {
    "id": "personal_024",
    "title": "Caramelo",
    "originalTitle": "Caramelo",
    "category": "comedia",
    "categoryName": "COMÉDIA",
    "year": 2025,
    "director": "Diego Freitas",
    "initialHint": "Uma amizade inesperada ajuda alguém a enfrentar uma grande mudança de vida.",
    "trivia": "Um cozinheiro e um cachorro vira-lata dividem o centro desta história brasileira.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/1277988",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_024-1.jpg",
        "alt": "Detalhe ampliado: Dois homens na cozinha.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_024-2.jpg",
        "alt": "Detalhe ampliado: Homem e cachorro junto à mesa.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_024-3.jpg",
        "alt": "Detalhe ampliado: Cachorro de pelo caramelo.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_024-1.jpg",
        "alt": "Dois homens na cozinha."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_024-2.jpg",
        "alt": "Homem e cachorro junto à mesa."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_024-3.jpg",
        "alt": "Cachorro de pelo caramelo."
      }
    ],
    "synopsis": "Um cozinheiro dedicado à carreira tem a vida transformada ao conhecer um cachorro caramelo. A relação com o animal o acompanha numa fase difícil e o leva a reconsiderar suas prioridades e seus vínculos."
  },
  {
    "id": "personal_025",
    "title": "A Promessa do Golfe",
    "originalTitle": "ライジングインパクト",
    "category": "anime",
    "categoryName": "ANIMES",
    "year": 2024,
    "director": "",
    "initialHint": "Um garoto do interior revela talento num esporte que depende de precisão.",
    "trivia": "Gawain entra no mundo do golfe competitivo nesta adaptação do mangá Rising Impact.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/241138",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_025-1.jpg",
        "alt": "Detalhe ampliado: Garota numa sala escura.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_025-2.jpg",
        "alt": "Detalhe ampliado: Jovem golfista ruivo.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_025-3.jpg",
        "alt": "Detalhe ampliado: Menino loiro sorri.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_025-1.jpg",
        "alt": "Garota numa sala escura."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_025-2.jpg",
        "alt": "Jovem golfista ruivo."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_025-3.jpg",
        "alt": "Menino loiro sorri."
      }
    ],
    "synopsis": "Um menino descobre uma habilidade extraordinária para o golfe e entra num ambiente de formação de jovens talentos. Ao enfrentar rivais e aprender novas técnicas, ele busca crescer no esporte e alcançar competições cada vez maiores."
  },
  {
    "id": "personal_026",
    "title": "As Quatro Estações do Ano",
    "originalTitle": "The Four Seasons",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2025,
    "director": "Lang Fisher & Tracey Wigfield & Tina Fey",
    "initialHint": "As viagens de um grupo de amigos revelam que seus relacionamentos estão mudando.",
    "trivia": "A série de comédia acompanha três casais ao longo de encontros em diferentes estações.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/243316",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_026-1.jpg",
        "alt": "Detalhe ampliado: Amigos numa sala de cinema.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_026-2.jpg",
        "alt": "Detalhe ampliado: Amigos numa estrada arborizada.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_026-3.jpg",
        "alt": "Detalhe ampliado: Grupo diante de montanhas.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_026-1.jpg",
        "alt": "Amigos numa sala de cinema."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_026-2.jpg",
        "alt": "Amigos numa estrada arborizada."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_026-3.jpg",
        "alt": "Grupo diante de montanhas."
      }
    ],
    "synopsis": "Três casais de amigos mantêm o hábito de viajar juntos ao longo do ano. Quando uma separação abala o grupo, os encontros passam a expor tensões, inseguranças e mudanças nas amizades e nos relacionamentos."
  },
  {
    "id": "personal_027",
    "title": "A Culpa É do Cabral",
    "originalTitle": "A Culpa É do Cabral",
    "category": "programas",
    "categoryName": "PROGRAMAS E REALITY",
    "year": 2016,
    "director": "",
    "initialHint": "Um grupo de comediantes transforma assuntos cotidianos em provocações e brincadeiras.",
    "trivia": "O programa brasileiro reúne humoristas em conversas, jogos e comentários sobre situações do dia a dia.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/89214",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_027-1.jpg",
        "alt": "Detalhe ampliado: Humoristas num palco.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_027-2.jpg",
        "alt": "Detalhe ampliado: Humoristas ao redor de uma fogueira.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_027-3.jpg",
        "alt": "Detalhe ampliado: Grupo de comediantes numa montagem colorida.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_027-1.jpg",
        "alt": "Humoristas num palco."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_027-2.jpg",
        "alt": "Humoristas ao redor de uma fogueira."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_027-3.jpg",
        "alt": "Grupo de comediantes numa montagem colorida."
      }
    ],
    "synopsis": "Um grupo de humoristas se reúne para comentar situações do cotidiano e participar de brincadeiras. As diferenças de personalidade e as provocações entre os participantes dão o ritmo aos encontros no palco."
  },
  {
    "id": "personal_028",
    "title": "Mushoku Tensei: Jobless Reincarnation",
    "originalTitle": "無職転生 ～異世界行ったら本気だす～",
    "category": "anime",
    "categoryName": "ANIMES",
    "year": 2021,
    "director": "",
    "initialHint": "Uma nova vida dá a um personagem a chance de enfrentar seus erros de outra maneira.",
    "trivia": "Rudeus renasce num mundo de magia nesta adaptação do romance japonês Mushoku Tensei.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/94664",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_028-1.jpg",
        "alt": "Detalhe ampliado: Personagens numa sala.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_028-2.jpg",
        "alt": "Detalhe ampliado: Esfera mágica num campo.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_028-3.jpg",
        "alt": "Detalhe ampliado: Rapaz e sua companheira diante de magia.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_028-1.jpg",
        "alt": "Personagens numa sala."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_028-2.jpg",
        "alt": "Esfera mágica num campo."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_028-3.jpg",
        "alt": "Rapaz e sua companheira diante de magia."
      }
    ],
    "synopsis": "Depois de uma vida marcada por arrependimentos, um homem renasce como criança num mundo de magia. Mantendo as lembranças anteriores, ele tenta aproveitar a nova oportunidade enquanto aprende a lidar com poderes, relações e perigos desconhecidos."
  },
  {
    "id": "personal_029",
    "title": "School of Chocolate",
    "originalTitle": "School of Chocolate",
    "category": "programas",
    "categoryName": "PROGRAMAS E REALITY",
    "year": 2021,
    "director": "",
    "initialHint": "Alunos precisam dominar técnicas que unem cozinha e escultura.",
    "trivia": "Amaury Guichon orienta profissionais na criação de peças elaboradas com chocolate.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/137584",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_029-1.jpg",
        "alt": "Detalhe ampliado: Uma pilha de chocolates.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_029-2.jpg",
        "alt": "Detalhe ampliado: Chef numa cozinha profissional.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_029-1.jpg",
        "alt": "Detalhe ampliado: Uma pilha de chocolates.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_029-2.jpg",
        "alt": "Detalhe ampliado: Chef numa cozinha profissional.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_029-1.jpg",
        "alt": "Uma pilha de chocolates."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_029-2.jpg",
        "alt": "Chef numa cozinha profissional."
      }
    ],
    "synopsis": "Profissionais da confeitaria aperfeiçoam suas técnicas sob a orientação do chocolatier Amaury Guichon. Os participantes enfrentam desafios que envolvem sobremesas e esculturas de chocolate, buscando se destacar pela execução e pela criatividade."
  },
  {
    "id": "personal_030",
    "title": "Mo",
    "originalTitle": "Mo",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2022,
    "director": "Mo Amer & Ramy Youssef",
    "initialHint": "Um homem tenta sustentar a família enquanto espera resolver sua situação no país.",
    "trivia": "Mo Amer interpreta um refugiado palestino que vive em Houston e lida com trabalho, família e imigração.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/201124",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_030-1.jpg",
        "alt": "Detalhe ampliado: Grupo num parque.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_030-2.jpg",
        "alt": "Detalhe ampliado: Homem junto à janela.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_030-3.jpg",
        "alt": "Detalhe ampliado: Homem apoiado num carro.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_030-1.jpg",
        "alt": "Grupo num parque."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_030-2.jpg",
        "alt": "Homem junto à janela."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_030-3.jpg",
        "alt": "Homem apoiado num carro."
      }
    ],
    "synopsis": "Mo é um refugiado palestino que vive no Texas e tenta sustentar a família enquanto espera a definição de seu pedido de asilo. Entre trabalhos informais e diferenças culturais, ele busca estabilidade sem perder suas raízes."
  },
  {
    "id": "personal_031",
    "title": "One Piece: A Série",
    "originalTitle": "ONE PIECE",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2023,
    "director": "Matt Owens & Steven Maeda",
    "initialHint": "Uma tripulação improvável se forma em busca de um tesouro lendário.",
    "trivia": "A versão em live-action acompanha Luffy e os Piratas do Chapéu de Palha.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/111110",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_031-1.jpg",
        "alt": "Detalhe ampliado: Piratas no convés.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_031-2.jpg",
        "alt": "Detalhe ampliado: Três jovens piratas.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_031-3.jpg",
        "alt": "Detalhe ampliado: Silhuetas diante de um navio.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_031-1.jpg",
        "alt": "Piratas no convés."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_031-2.jpg",
        "alt": "Três jovens piratas."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_031-3.jpg",
        "alt": "Silhuetas diante de um navio."
      }
    ],
    "synopsis": "Luffy sonha em se tornar o Rei dos Piratas e parte em busca de um tesouro lendário. Para cruzar mares perigosos, reúne uma tripulação cujos integrantes carregam sonhos próprios e aprendem a confiar uns nos outros."
  },
  {
    "id": "personal_032",
    "title": "Como Vender Drogas Online (Rápido)",
    "originalTitle": "How to Sell Drugs Online (Fast)",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2019,
    "director": "Matthias Murmann & Philipp Kässbohrer",
    "initialHint": "Um adolescente começa um negócio clandestino usando conhecimentos de tecnologia.",
    "trivia": "Moritz transforma uma ideia para impressionar a ex-namorada numa operação de venda de drogas pela internet.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/88236",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_032-1.jpg",
        "alt": "Detalhe ampliado: Adolescente diante de uma tela.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_032-2.jpg",
        "alt": "Detalhe ampliado: Amigos numa sala de aula.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_032-3.jpg",
        "alt": "Detalhe ampliado: Dois jovens à beira da estrada.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_032-1.jpg",
        "alt": "Adolescente diante de uma tela."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_032-2.jpg",
        "alt": "Amigos numa sala de aula."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_032-3.jpg",
        "alt": "Dois jovens à beira da estrada."
      }
    ],
    "synopsis": "Um adolescente tímido começa a vender drogas pela internet com a ajuda de um amigo. O negócio cresce muito além de seus planos e mistura problemas escolares, relacionamentos e os riscos de lidar com criminosos de verdade."
  },
  {
    "id": "personal_033",
    "title": "Mistério em Paris",
    "originalTitle": "Murder Mystery 2",
    "category": "comedia",
    "categoryName": "COMÉDIA",
    "year": 2023,
    "director": "Jeremy Garelick",
    "initialHint": "Uma dupla que tenta viver de investigações acaba envolvida num caso durante uma viagem.",
    "trivia": "Adam Sandler e Jennifer Aniston retornam como Nick e Audrey Spitz nesta continuação de Mistério no Mediterrâneo.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/638974",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_033-1.jpg",
        "alt": "Detalhe ampliado: Casal usando casacos de pele.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_033-2.jpg",
        "alt": "Detalhe ampliado: Casal escondido junto a uma mala.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_033-3.jpg",
        "alt": "Detalhe ampliado: Casal à margem de um rio.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_033-1.jpg",
        "alt": "Casal usando casacos de pele."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_033-2.jpg",
        "alt": "Casal escondido junto a uma mala."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_033-3.jpg",
        "alt": "Casal à margem de um rio."
      }
    ],
    "synopsis": "Nick e Audrey tentam fazer sua agência de investigação prosperar quando um amigo é sequestrado durante uma festa de casamento. A busca pelos responsáveis leva o casal a Paris e a uma trama cheia de suspeitos e reviravoltas."
  },
  {
    "id": "personal_034",
    "title": "Isso É um Bolo? Halloween",
    "originalTitle": "Is It Cake? Halloween",
    "category": "programas",
    "categoryName": "PROGRAMAS E REALITY",
    "year": 2025,
    "director": "",
    "initialHint": "Objetos de uma festa temática podem esconder uma sobremesa muito convincente.",
    "trivia": "Esta edição de Is It Cake? usa o Halloween como tema para desafios de confeitaria.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/300594",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_034-1.jpg",
        "alt": "Detalhe ampliado: Bolo decorado com abóboras.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_034-2.jpg",
        "alt": "Detalhe ampliado: Apresentador num estúdio de competição.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_034-3.jpg",
        "alt": "Detalhe ampliado: Apresentador sentado numa cadeira.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_034-1.jpg",
        "alt": "Bolo decorado com abóboras."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_034-2.jpg",
        "alt": "Apresentador num estúdio de competição."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_034-3.jpg",
        "alt": "Apresentador sentado numa cadeira."
      }
    ],
    "synopsis": "Confeiteiros se enfrentam numa edição temática de Halloween em que bolos imitam objetos e decorações. Os jurados precisam distinguir as criações comestíveis dos itens reais, enquanto os participantes tentam avançar na competição."
  },
  {
    "id": "personal_035",
    "title": "O Píer",
    "originalTitle": "The Waterfront",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2025,
    "director": "Kevin Williamson",
    "initialHint": "Uma família ligada ao litoral tenta manter seus negócios enquanto esconde problemas.",
    "trivia": "O drama The Waterfront acompanha a família Buckley e os riscos de seu empreendimento pesqueiro.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/254544",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_035-1.jpg",
        "alt": "Detalhe ampliado: Homem sentado numa sala de madeira.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_035-2.jpg",
        "alt": "Detalhe ampliado: Três pessoas junto à água.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_035-1.jpg",
        "alt": "Detalhe ampliado: Homem sentado numa sala de madeira.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_035-2.jpg",
        "alt": "Detalhe ampliado: Três pessoas junto à água.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_035-1.jpg",
        "alt": "Homem sentado numa sala de madeira."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_035-2.jpg",
        "alt": "Três pessoas junto à água."
      }
    ],
    "synopsis": "Uma família influente de uma cidade litorânea enfrenta dificuldades para manter seu negócio de pesca. As tentativas de salvar o patrimônio levam seus integrantes a decisões perigosas, enquanto segredos e conflitos ameaçam suas relações."
  },
  {
    "id": "personal_036",
    "title": "The King of Queens",
    "originalTitle": "The King of Queens",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 1998,
    "director": "Michael J. Weithorn & David Litt",
    "initialHint": "Um casal enfrenta a rotina com um parente que sempre encontra uma forma de interferir.",
    "trivia": "Kevin James e Leah Remini interpretam Doug e Carrie, que dividem a casa com o pai dela.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/4238",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_036-1.jpg",
        "alt": "Detalhe ampliado: Casal examina um papel à mesa.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_036-2.jpg",
        "alt": "Detalhe ampliado: Casal conversa em casa.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_036-3.jpg",
        "alt": "Detalhe ampliado: Dois homens usando chapéus.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_036-1.jpg",
        "alt": "Casal examina um papel à mesa."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_036-2.jpg",
        "alt": "Casal conversa em casa."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_036-3.jpg",
        "alt": "Dois homens usando chapéus."
      }
    ],
    "synopsis": "Doug trabalha fazendo entregas e vive com a esposa Carrie no Queens. A presença do sogro em casa, as amizades e os problemas do dia a dia transformam pequenas diferenças do casal em grandes confusões."
  },
  {
    "id": "personal_037",
    "title": "O Cangaceiro do Futuro",
    "originalTitle": "O Cangaceiro do Futuro",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2022,
    "director": "Halder Gomes",
    "initialHint": "Uma viagem impossível coloca um homem moderno diante de figuras do passado.",
    "trivia": "Edmilson Filho vive um homem que chega ao sertão de outra época e é confundido com Lampião.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/195298",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_037-1.jpg",
        "alt": "Detalhe ampliado: Três homens com trajes de cangaceiros.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_037-2.jpg",
        "alt": "Detalhe ampliado: Homem de chapéu de couro numa paisagem do sertão.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_037-1.jpg",
        "alt": "Detalhe ampliado: Três homens com trajes de cangaceiros.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_037-2.jpg",
        "alt": "Detalhe ampliado: Homem de chapéu de couro numa paisagem do sertão.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_037-1.jpg",
        "alt": "Três homens com trajes de cangaceiros."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_037-2.jpg",
        "alt": "Homem de chapéu de couro numa paisagem do sertão."
      }
    ],
    "synopsis": "Um homem do presente acaba transportado para o sertão dos anos 1920 e é confundido com Lampião. Tentando aproveitar a semelhança, ele se envolve com cangaceiros e precisa sobreviver às consequências de sua farsa."
  },
  {
    "id": "personal_038",
    "title": "Isso É um Bolo? Especial Romântico",
    "originalTitle": "Is It Cake? Valentines",
    "category": "programas",
    "categoryName": "PROGRAMAS E REALITY",
    "year": 2026,
    "director": "",
    "initialHint": "Uma competição de ilusões comestíveis ganha uma proposta para casais.",
    "trivia": "Confeiteiros trabalham em dupla para tentar enganar jurados com bolos que parecem objetos reais.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/1610866",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_038-1.jpg",
        "alt": "Detalhe ampliado: Bolo cor-de-rosa com esculturas e corações.",
        "zoom": 4,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_038-1.jpg",
        "alt": "Detalhe ampliado: Bolo cor-de-rosa com esculturas e corações.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_038-1.jpg",
        "alt": "Detalhe ampliado: Bolo cor-de-rosa com esculturas e corações.",
        "zoom": 2.3,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_038-1.jpg",
        "alt": "Detalhe ampliado: Bolo cor-de-rosa com esculturas e corações.",
        "zoom": 1.7,
        "origin": "50% 50%"
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_038-1.jpg",
        "alt": "Detalhe ampliado: Bolo cor-de-rosa com esculturas e corações.",
        "zoom": 1.3,
        "origin": "50% 50%"
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_038-1.jpg",
        "alt": "Bolo cor-de-rosa com esculturas e corações."
      }
    ],
    "synopsis": "Duplas de confeiteiros participam de desafios inspirados no romance, criando bolos que parecem objetos de verdade. Para vencer, precisam combinar habilidade e criatividade e convencer os jurados de que suas criações não são comestíveis."
  },
  {
    "id": "personal_039",
    "title": "Pit Stop",
    "originalTitle": "The Crew",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2021,
    "director": "Jeff Lowell",
    "initialHint": "Uma equipe tradicional precisa lidar com uma nova chefe e novas ideias.",
    "trivia": "Kevin James interpreta o chefe de uma equipe de automobilismo nesta comédia chamada The Crew no original.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/116736",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_039-1.jpg",
        "alt": "Detalhe ampliado: Piloto recebe uma entrevista.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_039-2.jpg",
        "alt": "Detalhe ampliado: Dois colegas numa garagem de corrida.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_039-3.jpg",
        "alt": "Detalhe ampliado: Homem com boné apoiado num carro de corrida.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_039-1.jpg",
        "alt": "Piloto recebe uma entrevista."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_039-2.jpg",
        "alt": "Dois colegas numa garagem de corrida."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_039-3.jpg",
        "alt": "Homem com boné apoiado num carro de corrida."
      }
    ],
    "synopsis": "O chefe de uma equipe de automobilismo vê sua rotina mudar quando uma nova gestora assume o comando. Ele e os colegas tentam preservar seus métodos enquanto enfrentam propostas de modernização, cobranças e conflitos na garagem."
  },
  {
    "id": "personal_040",
    "title": "Pretty Smart",
    "originalTitle": "Pretty Smart",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2021,
    "director": "Jack Dolgen & Doug Mand",
    "initialHint": "Uma jovem intelectual vai morar com pessoas que vivem de um jeito muito diferente.",
    "trivia": "Emily Osment interpreta Chelsea, que passa a dividir a casa com a irmã e os amigos dela.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/133537",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_040-1.jpg",
        "alt": "Detalhe ampliado: Amigos se abraçam.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_040-2.jpg",
        "alt": "Detalhe ampliado: Cinco jovens diante de um fundo amarelo.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_040-1.jpg",
        "alt": "Detalhe ampliado: Amigos se abraçam.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_040-2.jpg",
        "alt": "Detalhe ampliado: Cinco jovens diante de um fundo amarelo.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_040-1.jpg",
        "alt": "Amigos se abraçam."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_040-2.jpg",
        "alt": "Cinco jovens diante de um fundo amarelo."
      }
    ],
    "synopsis": "Uma jovem intelectual vai morar com a irmã e os amigos dela depois de uma mudança em sua vida. A convivência com pessoas de hábitos e prioridades diferentes a leva a descobrir novas formas de amizade e pertencimento."
  },
  {
    "id": "personal_041",
    "title": "O Poder e a Lei",
    "originalTitle": "The Lincoln Lawyer",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2022,
    "director": "David E. Kelley",
    "initialHint": "Um profissional resolve casos enquanto transforma seu carro em parte do escritório.",
    "trivia": "Mickey Haller é o advogado de Los Angeles que dá nome à série The Lincoln Lawyer.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/116799",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_041-1.jpg",
        "alt": "Detalhe ampliado: Advogado ao lado de um conversível.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_041-2.jpg",
        "alt": "Detalhe ampliado: Homem dirige um carro.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_041-3.jpg",
        "alt": "Detalhe ampliado: Grupo diante de um carro ao pôr do sol.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_041-1.jpg",
        "alt": "Advogado ao lado de um conversível."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_041-2.jpg",
        "alt": "Homem dirige um carro."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_041-3.jpg",
        "alt": "Grupo diante de um carro ao pôr do sol."
      }
    ],
    "synopsis": "O advogado Mickey Haller retoma a carreira e administra casos de Los Angeles usando seu carro como escritório. Entre julgamentos complexos e problemas pessoais, ele tenta defender clientes sem se perder nas armadilhas de cada investigação."
  },
  {
    "id": "personal_042",
    "title": "Ozark",
    "originalTitle": "Ozark",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2017,
    "director": "Bill Dubuque & Mark Williams",
    "initialHint": "Uma família se muda e tenta sobreviver a um negócio criminoso muito maior que ela.",
    "trivia": "Jason Bateman e Laura Linney interpretam Marty e Wendy Byrde no drama ambientado na região dos Ozarks.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/69740",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_042-1.jpg",
        "alt": "Detalhe ampliado: Casal conversa no pátio de um hotel.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_042-2.jpg",
        "alt": "Detalhe ampliado: Homem entre árvores.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_042-3.jpg",
        "alt": "Detalhe ampliado: Casal num ambiente escuro.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_042-1.jpg",
        "alt": "Casal conversa no pátio de um hotel."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_042-2.jpg",
        "alt": "Homem entre árvores."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_042-3.jpg",
        "alt": "Casal num ambiente escuro."
      }
    ],
    "synopsis": "Um consultor financeiro muda a família para a região dos Ozarks depois que um esquema de lavagem de dinheiro dá errado. Para sobreviver, precisa criar novos negócios e negociar com criminosos, enquanto os familiares se envolvem cada vez mais."
  },
  {
    "id": "personal_043",
    "title": "Uma Mulher sem Filtro",
    "originalTitle": "Uma Mulher sem Filtro",
    "category": "comedia",
    "categoryName": "COMÉDIA",
    "year": 2025,
    "director": "Arthur Fontes",
    "initialHint": "A sinceridade sem medida transforma a rotina de uma mulher e suas relações.",
    "trivia": "A comédia brasileira coloca a falta de filtro da protagonista no centro das situações.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/1302318",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_043-1.jpg",
        "alt": "Detalhe ampliado: Duas mulheres diante de um fundo cor-de-rosa.",
        "zoom": 4,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_043-1.jpg",
        "alt": "Detalhe ampliado: Duas mulheres diante de um fundo cor-de-rosa.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_043-1.jpg",
        "alt": "Detalhe ampliado: Duas mulheres diante de um fundo cor-de-rosa.",
        "zoom": 2.3,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_043-1.jpg",
        "alt": "Detalhe ampliado: Duas mulheres diante de um fundo cor-de-rosa.",
        "zoom": 1.7,
        "origin": "50% 50%"
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_043-1.jpg",
        "alt": "Detalhe ampliado: Duas mulheres diante de um fundo cor-de-rosa.",
        "zoom": 1.3,
        "origin": "50% 50%"
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_043-1.jpg",
        "alt": "Duas mulheres diante de um fundo cor-de-rosa."
      }
    ],
    "synopsis": "Uma mulher passa a dizer o que pensa sem os filtros que antes controlavam suas relações. A sinceridade altera sua vida pessoal e profissional, expondo conflitos e colocando à prova a maneira como lida com as outras pessoas."
  },
  {
    "id": "personal_044",
    "title": "O Idiota Favorito de Deus",
    "originalTitle": "God's Favorite Idiot",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2022,
    "director": "Ben Falcone",
    "initialHint": "Uma rotina de escritório muda depois de um acontecimento que parece sobrenatural.",
    "trivia": "Ben Falcone e Melissa McCarthy protagonizam a comédia sobre um homem que recebe uma missão divina.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/114201",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_044-1.jpg",
        "alt": "Detalhe ampliado: Mulher de óculos escuros num escritório.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_044-2.jpg",
        "alt": "Detalhe ampliado: Casal conversa à mesa.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_044-3.jpg",
        "alt": "Detalhe ampliado: Dupla numa motocicleta.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_044-1.jpg",
        "alt": "Mulher de óculos escuros num escritório."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_044-2.jpg",
        "alt": "Casal conversa à mesa."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_044-3.jpg",
        "alt": "Dupla numa motocicleta."
      }
    ],
    "synopsis": "Um funcionário comum passa por uma experiência inexplicável e acredita ter recebido uma missão divina. Com a ajuda dos colegas, tenta compreender seu novo papel enquanto forças sobrenaturais e problemas cotidianos complicam sua vida."
  },
  {
    "id": "personal_045",
    "title": "Os Bad Boas",
    "originalTitle": "Bad Boa's",
    "category": "acao",
    "categoryName": "AÇÃO E AVENTURA",
    "year": 2025,
    "director": "Gonzalo Fernandez Carmona",
    "initialHint": "Uma dupla improvável transforma o patrulhamento das ruas em uma sucessão de problemas.",
    "trivia": "A comédia holandesa acompanha dois agentes comunitários com maneiras muito diferentes de trabalhar.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/1374534",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_045-1.jpg",
        "alt": "Detalhe ampliado: Agentes conversam com uma moradora.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_045-2.jpg",
        "alt": "Detalhe ampliado: Agentes junto a um carro vermelho.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_045-3.jpg",
        "alt": "Detalhe ampliado: Dois agentes numa escadaria.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_045-1.jpg",
        "alt": "Agentes conversam com uma moradora."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_045-2.jpg",
        "alt": "Agentes junto a um carro vermelho."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_045-3.jpg",
        "alt": "Dois agentes numa escadaria."
      }
    ],
    "synopsis": "Dois agentes comunitários de personalidades opostas patrulham um bairro e se envolvem numa situação criminosa. A parceria precisa superar atritos e improvisos quando o trabalho aparentemente simples se transforma numa aventura perigosa."
  },
  {
    "id": "personal_046",
    "title": "A Dona da Bola",
    "originalTitle": "Running Point",
    "category": "esportes",
    "categoryName": "ESPORTES E DOCUMENTÁRIOS",
    "year": 2025,
    "director": "Mindy Kaling & Ike Barinholtz & David Stassen & Elaine Ko",
    "initialHint": "Uma herdeira precisa provar que consegue comandar um negócio dominado por homens.",
    "trivia": "Kate Hudson interpreta Isla Gordon, que assume a presidência de uma equipe de basquete.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/244623",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_046-1.jpg",
        "alt": "Detalhe ampliado: Duas mulheres sentadas no sofá.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_046-2.jpg",
        "alt": "Detalhe ampliado: Executiva comemora com colegas.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_046-3.jpg",
        "alt": "Detalhe ampliado: Mulher no centro de uma quadra de basquete.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_046-1.jpg",
        "alt": "Duas mulheres sentadas no sofá."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_046-2.jpg",
        "alt": "Executiva comemora com colegas."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_046-3.jpg",
        "alt": "Mulher no centro de uma quadra de basquete."
      }
    ],
    "synopsis": "Isla Gordon assume a presidência do time de basquete da família e precisa demonstrar que merece o cargo. Cercada por expectativas, rivalidades e opiniões de parentes, ela tenta estabelecer sua liderança num ambiente dominado por homens."
  },
  {
    "id": "personal_047",
    "title": "Cabras da Peste",
    "originalTitle": "Cabras da Peste",
    "category": "acao",
    "categoryName": "AÇÃO E AVENTURA",
    "year": 2021,
    "director": "Vitor Brandt",
    "initialHint": "Dois policiais seguem uma investigação pouco convencional envolvendo um animal.",
    "trivia": "Edmilson Filho e Matheus Nachtergaele formam a dupla que procura a cabra Celestina.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/799497",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_047-1.jpg",
        "alt": "Detalhe ampliado: Dois policiais conversam numa rua colorida.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_047-2.jpg",
        "alt": "Detalhe ampliado: Dois homens diante de uma casa.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_047-1.jpg",
        "alt": "Detalhe ampliado: Dois policiais conversam numa rua colorida.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_047-2.jpg",
        "alt": "Detalhe ampliado: Dois homens diante de uma casa.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_047-1.jpg",
        "alt": "Dois policiais conversam numa rua colorida."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_047-2.jpg",
        "alt": "Dois homens diante de uma casa."
      }
    ],
    "synopsis": "Um policial do interior do Ceará viaja a São Paulo para encontrar uma cabra desaparecida. A busca o aproxima de um colega pouco preparado para a ação e envolve a dupla numa investigação muito maior do que imaginava."
  },
  {
    "id": "personal_048",
    "title": "Emergência Radioativa",
    "originalTitle": "Emergência Radioativa",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2026,
    "director": "Gustavo Lipsztein",
    "initialHint": "Uma descoberta aparentemente pequena provoca uma crise com consequências para muitas pessoas.",
    "trivia": "A minissérie dramatiza o acidente com césio-137 ocorrido em Goiânia.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/292474",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_048-1.jpg",
        "alt": "Detalhe ampliado: Homem num depósito de sucata.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_048-2.jpg",
        "alt": "Detalhe ampliado: Homem junto a símbolos de radiação.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_048-1.jpg",
        "alt": "Detalhe ampliado: Homem num depósito de sucata.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_048-2.jpg",
        "alt": "Detalhe ampliado: Homem junto a símbolos de radiação.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_048-1.jpg",
        "alt": "Homem num depósito de sucata."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_048-2.jpg",
        "alt": "Homem junto a símbolos de radiação."
      }
    ],
    "synopsis": "O encontro de material radioativo num equipamento abandonado desencadeia uma crise em Goiânia. A minissérie acompanha as pessoas atingidas e os esforços para compreender e conter as consequências do acidente com césio-137."
  },
  {
    "id": "personal_049",
    "title": "Astérix e Obélix no Reino do Meio",
    "originalTitle": "Astérix & Obélix : L'Empire du Milieu",
    "category": "acao",
    "categoryName": "AÇÃO E AVENTURA",
    "year": 2023,
    "director": "Guillaume Canet",
    "initialHint": "Dois amigos usam força e esperteza para ajudar alguém que veio de muito longe.",
    "trivia": "Os heróis gauleses viajam ao universo da China imperial nesta aventura em live-action.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/643215",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_049-1.jpg",
        "alt": "Detalhe ampliado: Dois homens conversam ao ar livre.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_049-2.jpg",
        "alt": "Detalhe ampliado: Personagens numa embarcação.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_049-3.jpg",
        "alt": "Detalhe ampliado: Dois gauleses usando capacetes.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_049-1.jpg",
        "alt": "Dois homens conversam ao ar livre."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_049-2.jpg",
        "alt": "Personagens numa embarcação."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_049-3.jpg",
        "alt": "Dois gauleses usando capacetes."
      }
    ],
    "synopsis": "Uma princesa chinesa pede ajuda aos gauleses para enfrentar uma conspiração contra sua mãe, a imperatriz. Astérix e Obélix partem numa viagem até a China, onde sua missão acaba cruzando os planos de Júlio César."
  },
  {
    "id": "personal_050",
    "title": "Berlim e a Dama com Arminho",
    "originalTitle": "Berlín y la dama del armiño",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2026,
    "director": "Álex Pina & Esther Martínez Lobato",
    "initialHint": "Um especialista em roubos prepara outro plano cercado de charme e risco.",
    "trivia": "O personagem Berlim volta ao centro de uma trama de assalto ligada a uma obra de arte.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/308014",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_050-1.jpg",
        "alt": "Detalhe ampliado: Cavalos cobertos atravessam uma praça.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_050-2.jpg",
        "alt": "Detalhe ampliado: Homem numa escadaria de um pátio espanhol.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_050-1.jpg",
        "alt": "Detalhe ampliado: Cavalos cobertos atravessam uma praça.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_050-2.jpg",
        "alt": "Detalhe ampliado: Homem numa escadaria de um pátio espanhol.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_050-1.jpg",
        "alt": "Cavalos cobertos atravessam uma praça."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_050-2.jpg",
        "alt": "Homem numa escadaria de um pátio espanhol."
      }
    ],
    "synopsis": "Berlim e sua equipe preparam um roubo envolvendo uma obra de arte em Sevilha. A execução do plano se mistura a romances, ambições pessoais e situações que exigem improviso para manter o grupo fora de perigo."
  },
  {
    "id": "personal_051",
    "title": "Natal sob a Aurora Boreal",
    "originalTitle": "Christmas Under the Northern Lights",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2024,
    "director": "Ernie Barbarash",
    "initialHint": "Uma viagem de fim de ano oferece uma oportunidade inesperada de recomeço.",
    "trivia": "A história romântica usa as luzes da aurora boreal como cenário para um encontro natalino.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/1341123",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_051-1.jpg",
        "alt": "Detalhe ampliado: Casal diante de uma paisagem com aurora boreal.",
        "zoom": 4,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_051-1.jpg",
        "alt": "Detalhe ampliado: Casal diante de uma paisagem com aurora boreal.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_051-1.jpg",
        "alt": "Detalhe ampliado: Casal diante de uma paisagem com aurora boreal.",
        "zoom": 2.3,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_051-1.jpg",
        "alt": "Detalhe ampliado: Casal diante de uma paisagem com aurora boreal.",
        "zoom": 1.7,
        "origin": "50% 50%"
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_051-1.jpg",
        "alt": "Detalhe ampliado: Casal diante de uma paisagem com aurora boreal.",
        "zoom": 1.3,
        "origin": "50% 50%"
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_051-1.jpg",
        "alt": "Casal diante de uma paisagem com aurora boreal."
      }
    ],
    "synopsis": "Uma viagem de Natal em busca da aurora boreal aproxima uma mulher de um guia local. Enquanto explora a paisagem e tenta se reencontrar, ela descobre novas possibilidades para a vida e para o amor."
  },
  {
    "id": "personal_052",
    "title": "Os Donos do Jogo",
    "originalTitle": "Os Donos do Jogo",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2025,
    "director": "Heitor Dhalia",
    "initialHint": "Famílias e rivais disputam influência num negócio clandestino brasileiro.",
    "trivia": "O drama acompanha as alianças e conflitos de poder ligados ao jogo do bicho.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/282440",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_052-1.jpg",
        "alt": "Detalhe ampliado: Dois homens num bar.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_052-2.jpg",
        "alt": "Detalhe ampliado: Homens diante de cortinas douradas.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_052-3.jpg",
        "alt": "Detalhe ampliado: Família numa sala luxuosa.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_052-1.jpg",
        "alt": "Dois homens num bar."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_052-2.jpg",
        "alt": "Homens diante de cortinas douradas."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_052-3.jpg",
        "alt": "Família numa sala luxuosa."
      }
    ],
    "synopsis": "Grupos rivais disputam dinheiro, influência e território no universo do jogo do bicho. Alianças familiares, romances e traições tornam a busca pelo poder uma ameaça constante para todos os envolvidos."
  },
  {
    "id": "personal_053",
    "title": "Nêmesis",
    "originalTitle": "Nemesis",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2026,
    "director": "Courtney Kemp Agboh & Tani Marole",
    "initialHint": "Um roubo aproxima adversários que precisam decidir até onde podem confiar um no outro.",
    "trivia": "O suspense policial Nemesis acompanha um criminoso e um agente da lei envolvidos num caso arriscado.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/285807",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_053-1.jpg",
        "alt": "Detalhe ampliado: Homem junto a luzes de viatura.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_053-2.jpg",
        "alt": "Detalhe ampliado: Dois homens conversam numa festa.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_053-3.jpg",
        "alt": "Detalhe ampliado: Dois homens diante de uma cidade à noite.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_053-1.jpg",
        "alt": "Homem junto a luzes de viatura."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_053-2.jpg",
        "alt": "Dois homens conversam numa festa."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_053-3.jpg",
        "alt": "Dois homens diante de uma cidade à noite."
      }
    ],
    "synopsis": "Um criminoso e um agente da lei se veem ligados por uma investigação de alto risco. A disputa entre os dois coloca suas convicções e relações pessoais em jogo, enquanto cada decisão pode mudar o rumo do caso."
  },
  {
    "id": "personal_054",
    "title": "O Amor Pode Ser Traduzido?",
    "originalTitle": "이 사랑 통역 되나요?",
    "category": "romance",
    "categoryName": "ROMANCE",
    "year": 2026,
    "director": "Hong Jeong-eun & Hong Mi-ran & Yoo Young-eun",
    "initialHint": "Um trabalho de tradução complica o entendimento entre duas pessoas.",
    "trivia": "O romance coreano aproxima uma celebridade e um intérprete que domina vários idiomas.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/229891",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_054-1.jpg",
        "alt": "Detalhe ampliado: Mulher toma uma bebida numa rua.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_054-2.jpg",
        "alt": "Detalhe ampliado: Casal num restaurante.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_054-3.jpg",
        "alt": "Detalhe ampliado: Casal numa paisagem coberta de neve.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_054-1.jpg",
        "alt": "Mulher toma uma bebida numa rua."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_054-2.jpg",
        "alt": "Casal num restaurante."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_054-3.jpg",
        "alt": "Casal numa paisagem coberta de neve."
      }
    ],
    "synopsis": "Uma celebridade e um intérprete passam a trabalhar juntos e descobrem que entender palavras não garante compreender sentimentos. A proximidade entre os dois transforma diferenças de comunicação numa possibilidade de romance."
  },
  {
    "id": "personal_055",
    "title": "Rachando o Bico com Kevin Hart",
    "originalTitle": "Funny AF with Kevin Hart",
    "category": "programas",
    "categoryName": "PROGRAMAS E REALITY",
    "year": 2026,
    "director": "",
    "initialHint": "Novas vozes do humor precisam conquistar uma plateia e provar seu talento.",
    "trivia": "Kevin Hart conduz uma competição de comédia stand-up.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/311991",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_055-1.jpg",
        "alt": "Detalhe ampliado: Humoristas conversam à mesa.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_055-2.jpg",
        "alt": "Detalhe ampliado: Apresentador ao lado de um microfone.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_055-3.jpg",
        "alt": "Detalhe ampliado: Participantes de uma competição de humor.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_055-1.jpg",
        "alt": "Humoristas conversam à mesa."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_055-2.jpg",
        "alt": "Apresentador ao lado de um microfone."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_055-3.jpg",
        "alt": "Participantes de uma competição de humor."
      }
    ],
    "synopsis": "Comediantes em busca de reconhecimento se apresentam diante de uma plateia e enfrentam desafios de stand-up. Sob a condução de Kevin Hart, precisam demonstrar originalidade e capacidade de conquistar o público para seguir na disputa."
  },
  {
    "id": "personal_056",
    "title": "Como Ganhar na Loteria",
    "originalTitle": "Me late que sí",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2025,
    "director": "",
    "initialHint": "Uma oportunidade de enriquecer leva pessoas comuns a participar de uma fraude.",
    "trivia": "A produção mexicana Me late que sí gira em torno de um plano para manipular um sorteio.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/283392",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_056-1.jpg",
        "alt": "Detalhe ampliado: Grupo examina um globo de bolas numeradas.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_056-2.jpg",
        "alt": "Detalhe ampliado: Homem segura uma bola numerada.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_056-1.jpg",
        "alt": "Detalhe ampliado: Grupo examina um globo de bolas numeradas.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_056-2.jpg",
        "alt": "Detalhe ampliado: Homem segura uma bola numerada.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_056-1.jpg",
        "alt": "Grupo examina um globo de bolas numeradas."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_056-2.jpg",
        "alt": "Homem segura uma bola numerada."
      }
    ],
    "synopsis": "Um grupo identifica uma possibilidade de manipular um sorteio de loteria e decide tentar enriquecer. À medida que a fraude cresce, os participantes precisam lidar com a ambição, a desconfiança e o risco de serem descobertos."
  },
  {
    "id": "personal_057",
    "title": "Brasil 70: A Saga do Tri",
    "originalTitle": "Brasil 70: A Saga do Tri",
    "category": "esportes",
    "categoryName": "ESPORTES E DOCUMENTÁRIOS",
    "year": 2026,
    "director": "Naná Xavier & Rafael Dornellas",
    "initialHint": "Uma equipe busca uma conquista histórica durante um período marcante do país.",
    "trivia": "A produção dramatiza a caminhada da seleção brasileira até a Copa de 1970.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/292532",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_057-1.jpg",
        "alt": "Detalhe ampliado: Treinador conversa com jogadores no vestiário.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_057-2.jpg",
        "alt": "Detalhe ampliado: Jogadores sobre uma bola de futebol.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_057-3.jpg",
        "alt": "Detalhe ampliado: Jogadores brasileiros comemoram.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_057-1.jpg",
        "alt": "Treinador conversa com jogadores no vestiário."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_057-2.jpg",
        "alt": "Jogadores sobre uma bola de futebol."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_057-3.jpg",
        "alt": "Jogadores brasileiros comemoram."
      }
    ],
    "synopsis": "A seleção brasileira se prepara para a Copa de 1970 sob forte pressão esportiva e política. A produção dramatiza o percurso de jogadores e comissão técnica até uma campanha que marcou a história do futebol do país."
  },
  {
    "id": "personal_058",
    "title": "De Férias com Você",
    "originalTitle": "People We Meet on Vacation",
    "category": "romance",
    "categoryName": "ROMANCE",
    "year": 2026,
    "director": "Brett Haley",
    "initialHint": "Dois amigos mantêm uma tradição de viagens que pode esconder outros sentimentos.",
    "trivia": "A adaptação de People We Meet on Vacation acompanha Poppy e Alex.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/1034716",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_058-1.jpg",
        "alt": "Detalhe ampliado: Homem num evento decorado com flores.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_058-2.jpg",
        "alt": "Detalhe ampliado: Casal caminha numa rua turística.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_058-3.jpg",
        "alt": "Detalhe ampliado: Mulher apoiada no ombro de um homem.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_058-1.jpg",
        "alt": "Homem num evento decorado com flores."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_058-2.jpg",
        "alt": "Casal caminha numa rua turística."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_058-3.jpg",
        "alt": "Mulher apoiada no ombro de um homem."
      }
    ],
    "synopsis": "Poppy e Alex têm personalidades diferentes, mas mantêm uma amizade construída em viagens anuais. Quando tentam retomar a tradição depois de um afastamento, precisam encarar sentimentos que podem mudar sua relação."
  },
  {
    "id": "personal_059",
    "title": "Ronaldinho Gaúcho",
    "originalTitle": "Ronaldinho Gaúcho",
    "category": "esportes",
    "categoryName": "ESPORTES E DOCUMENTÁRIOS",
    "year": 2026,
    "director": "",
    "initialHint": "Talento e personalidade ajudam um jogador a conquistar torcedores pelo mundo.",
    "trivia": "A produção revisita a carreira de Ronaldinho e sua relação criativa com o futebol.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/316544",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_059-1.jpg",
        "alt": "Detalhe ampliado: Ex-jogador sentado numa poltrona.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_059-2.jpg",
        "alt": "Detalhe ampliado: Ex-jogador de óculos diante de imagens de futebol.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_059-1.jpg",
        "alt": "Detalhe ampliado: Ex-jogador sentado numa poltrona.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_059-2.jpg",
        "alt": "Detalhe ampliado: Ex-jogador de óculos diante de imagens de futebol.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_059-1.jpg",
        "alt": "Ex-jogador sentado numa poltrona."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_059-2.jpg",
        "alt": "Ex-jogador de óculos diante de imagens de futebol."
      }
    ],
    "synopsis": "A produção documental revisita a trajetória de Ronaldinho, sua habilidade com a bola e a projeção internacional. O relato acompanha momentos da carreira e aspectos da vida de um jogador cuja criatividade conquistou torcedores pelo mundo."
  },
  {
    "id": "personal_060",
    "title": "Um Amor Real de Natal",
    "originalTitle": "A Royal Date for Christmas",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2023,
    "director": "Bradley Walsh",
    "initialHint": "Um encontro de fim de ano coloca uma pessoa comum perto de alguém da realeza.",
    "trivia": "O romance acompanha uma mulher que conhece um duque durante a temporada de Natal.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/1142780",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_060-1.jpg",
        "alt": "Detalhe ampliado: Casal dança entre luzes natalinas.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_060-2.jpg",
        "alt": "Detalhe ampliado: Casal ao lado de uma árvore de Natal.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_060-1.jpg",
        "alt": "Detalhe ampliado: Casal dança entre luzes natalinas.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_060-2.jpg",
        "alt": "Detalhe ampliado: Casal ao lado de uma árvore de Natal.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_060-1.jpg",
        "alt": "Casal dança entre luzes natalinas."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_060-2.jpg",
        "alt": "Casal ao lado de uma árvore de Natal."
      }
    ],
    "synopsis": "Durante a temporada de Natal, uma mulher conhece um visitante que se revela ligado à realeza. A convivência aproxima os dois, mas as diferenças entre suas vidas colocam novos desafios no caminho do romance."
  },
  {
    "id": "personal_061",
    "title": "Feliz Assalto!",
    "originalTitle": "Jingle Bell Heist",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2025,
    "director": "Michael Fimognari",
    "initialHint": "Um plano criminoso de fim de ano aproxima duas pessoas com motivos diferentes.",
    "trivia": "A comédia romântica Jingle Bell Heist combina um assalto com um encontro inesperado.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/1218762",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_061-1.jpg",
        "alt": "Detalhe ampliado: Mulher escondida sob um balcão.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_061-2.jpg",
        "alt": "Detalhe ampliado: Dupla numa rua à noite.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_061-3.jpg",
        "alt": "Detalhe ampliado: Mulher numa loja com decoração natalina.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_061-1.jpg",
        "alt": "Mulher escondida sob um balcão."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_061-2.jpg",
        "alt": "Dupla numa rua à noite."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_061-3.jpg",
        "alt": "Mulher numa loja com decoração natalina."
      }
    ],
    "synopsis": "Duas pessoas com dificuldades financeiras resolvem unir forças num assalto durante o período de Natal. Entre os preparativos e os imprevistos do plano, a parceria começa a ganhar um significado romântico inesperado."
  },
  {
    "id": "personal_062",
    "title": "Peaky Blinders: O Homem Imortal",
    "originalTitle": "Peaky Blinders: The Immortal Man",
    "category": "acao",
    "categoryName": "AÇÃO E AVENTURA",
    "year": 2026,
    "director": "Tom Harper",
    "initialHint": "Um homem precisa voltar a encarar seu passado num período de guerra.",
    "trivia": "Cillian Murphy retorna como Tommy Shelby no filme ligado ao universo de Peaky Blinders.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/875828",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_062-1.jpg",
        "alt": "Detalhe ampliado: Homem com boné numa rua de tijolos.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_062-2.jpg",
        "alt": "Detalhe ampliado: Dois homens com casacos compridos.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_062-3.jpg",
        "alt": "Detalhe ampliado: Homens saltam em frente a um edifício.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_062-1.jpg",
        "alt": "Homem com boné numa rua de tijolos."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_062-2.jpg",
        "alt": "Dois homens com casacos compridos."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_062-3.jpg",
        "alt": "Homens saltam em frente a um edifício."
      }
    ],
    "synopsis": "Durante a Segunda Guerra Mundial, Tommy Shelby precisa sair do afastamento e voltar a enfrentar seu passado. Conflitos familiares e novas ameaças o colocam diante de escolhas que envolvem o futuro de seu legado."
  },
  {
    "id": "personal_063",
    "title": "Resident Alien",
    "originalTitle": "Resident Alien",
    "category": "ficcao",
    "categoryName": "FICÇÃO E FANTASIA",
    "year": 2021,
    "director": "Chris Sheridan",
    "initialHint": "Um visitante tenta passar por humano enquanto aprende costumes de uma cidade pequena.",
    "trivia": "Alan Tudyk interpreta um alienígena que assume a identidade de um médico.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/96580",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_063-1.jpg",
        "alt": "Detalhe ampliado: Grupo ao redor de uma mesa.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_063-2.jpg",
        "alt": "Detalhe ampliado: Homem de suéter verde numa caminhonete vermelha.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_063-3.jpg",
        "alt": "Detalhe ampliado: Grupo sentado diante de uma floresta.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_063-1.jpg",
        "alt": "Grupo ao redor de uma mesa."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_063-2.jpg",
        "alt": "Homem de suéter verde numa caminhonete vermelha."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_063-3.jpg",
        "alt": "Grupo sentado diante de uma floresta."
      }
    ],
    "synopsis": "Um alienígena chega à Terra com uma missão e assume a identidade de um médico numa cidade pequena. Ao conviver com os moradores, tenta entender o comportamento humano enquanto esconde sua verdadeira origem."
  },
  {
    "id": "personal_064",
    "title": "Tetra: Acreditar de Novo",
    "originalTitle": "Tetra: Acreditar de Novo",
    "category": "esportes",
    "categoryName": "ESPORTES E DOCUMENTÁRIOS",
    "year": 2026,
    "director": "Luis Ara",
    "initialHint": "Uma equipe tenta recuperar a confiança de um país depois de anos de espera.",
    "trivia": "O documentário revisita a conquista brasileira da Copa do Mundo de 1994.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/1667493",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_064-1.jpg",
        "alt": "Detalhe ampliado: Jogadores comemoram com uma taça.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_064-2.jpg",
        "alt": "Detalhe ampliado: Capitão ergue uma taça dourada no estádio.",
        "zoom": 3,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_064-1.jpg",
        "alt": "Detalhe ampliado: Jogadores comemoram com uma taça.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_064-2.jpg",
        "alt": "Detalhe ampliado: Capitão ergue uma taça dourada no estádio.",
        "zoom": 1.8,
        "origin": "50% 50%"
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_064-1.jpg",
        "alt": "Jogadores comemoram com uma taça."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_064-2.jpg",
        "alt": "Capitão ergue uma taça dourada no estádio."
      }
    ],
    "synopsis": "O documentário revisita a campanha da seleção brasileira na Copa de 1994. A jornada acompanha a pressão por encerrar um longo período sem títulos e os momentos que levaram o Brasil à conquista do tetracampeonato."
  },
  {
    "id": "personal_065",
    "title": "Te Peguei!",
    "originalTitle": "Tag",
    "category": "comedia",
    "categoryName": "COMÉDIA",
    "year": 2018,
    "director": "Jeff Tomsic",
    "initialHint": "Um grupo de amigos mantém uma brincadeira de infância mesmo depois de adulto.",
    "trivia": "Os protagonistas organizam encontros para continuar um jogo de pega-pega que atravessa décadas.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/455980",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_065-1.jpg",
        "alt": "Detalhe ampliado: Amigos numa escadaria.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_065-2.jpg",
        "alt": "Detalhe ampliado: Homem num ambiente enfeitado com flores.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_065-3.jpg",
        "alt": "Detalhe ampliado: Mulher numa sala cheia de fumaça.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_065-1.jpg",
        "alt": "Amigos numa escadaria."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_065-2.jpg",
        "alt": "Homem num ambiente enfeitado com flores."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_065-3.jpg",
        "alt": "Mulher numa sala cheia de fumaça."
      }
    ],
    "synopsis": "Um grupo de amigos mantém desde a infância um jogo de pega-pega que ocupa um mês de cada ano. Quando surge a chance de finalmente alcançar o participante nunca pego, a brincadeira envolve planos cada vez mais elaborados."
  },
  {
    "id": "personal_066",
    "title": "Ted Lasso",
    "originalTitle": "Ted Lasso",
    "category": "esportes",
    "categoryName": "ESPORTES E DOCUMENTÁRIOS",
    "year": 2020,
    "director": "Bill Lawrence & Jason Sudeikis & Joe Kelly & Brendan Hunt",
    "initialHint": "Um treinador aceita um emprego num esporte que ele conhece muito pouco.",
    "trivia": "Jason Sudeikis interpreta um americano que vai comandar uma equipe inglesa de futebol.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/97546",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_066-1.jpg",
        "alt": "Detalhe ampliado: Treinadores conversam no campo.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_066-2.jpg",
        "alt": "Detalhe ampliado: Jogadores treinam num estádio.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_066-3.jpg",
        "alt": "Detalhe ampliado: Treinador de bigode ao lado de colegas.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_066-1.jpg",
        "alt": "Treinadores conversam no campo."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_066-2.jpg",
        "alt": "Jogadores treinam num estádio."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_066-3.jpg",
        "alt": "Treinador de bigode ao lado de colegas."
      }
    ],
    "synopsis": "Um treinador americano de futebol americano aceita comandar um clube de futebol na Inglaterra sem conhecer bem o esporte. Sua maneira otimista de tratar jogadores e funcionários começa a transformar a equipe e desafia o ceticismo ao redor."
  },
  {
    "id": "personal_067",
    "title": "Stick",
    "originalTitle": "Stick",
    "category": "esportes",
    "categoryName": "ESPORTES E DOCUMENTÁRIOS",
    "year": 2025,
    "director": "Jason Keller",
    "initialHint": "Um ex-atleta encontra uma nova chance ao ajudar um jovem talento.",
    "trivia": "Owen Wilson interpreta um antigo jogador profissional de golfe que vira mentor.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/248830",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_067-1.jpg",
        "alt": "Detalhe ampliado: Treinador com os braços cruzados.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_067-2.jpg",
        "alt": "Detalhe ampliado: Dois golfistas caminham juntos.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_067-3.jpg",
        "alt": "Detalhe ampliado: Dupla acompanha um torneio de golfe.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_067-1.jpg",
        "alt": "Treinador com os braços cruzados."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_067-2.jpg",
        "alt": "Dois golfistas caminham juntos."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_067-3.jpg",
        "alt": "Dupla acompanha um torneio de golfe."
      }
    ],
    "synopsis": "Um antigo profissional do golfe encontra um jovem talentoso e enxerga uma chance de recomeço. A jornada pelos torneios aproxima os dois e uma equipe improvisada, enquanto cada um precisa lidar com suas próprias perdas e expectativas."
  },
  {
    "id": "personal_068",
    "title": "Matchbox",
    "originalTitle": "Matchbox the Movie",
    "category": "acao",
    "categoryName": "AÇÃO E AVENTURA",
    "year": 2026,
    "director": "Sam Hargrave",
    "initialHint": "Velocidade e amizade se misturam numa aventura com veículos.",
    "trivia": "John Cena protagoniza a adaptação cinematográfica inspirada na marca de carrinhos Matchbox.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/1148365",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_068-1.jpg",
        "alt": "Detalhe ampliado: Homem corre entre carros.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_068-2.jpg",
        "alt": "Detalhe ampliado: Carros numa estrada com helicóptero.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_068-3.jpg",
        "alt": "Detalhe ampliado: Veículo salta sobre uma duna.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_068-1.jpg",
        "alt": "Homem corre entre carros."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_068-2.jpg",
        "alt": "Carros numa estrada com helicóptero."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_068-3.jpg",
        "alt": "Veículo salta sobre uma duna."
      }
    ],
    "synopsis": "Um grupo de amigos se envolve numa aventura de ação ligada a um integrante que trabalha como agente. Perseguições, veículos e situações arriscadas colocam sua amizade à prova quando precisam enfrentar ameaças maiores do que esperavam."
  },
  {
    "id": "personal_069",
    "title": "Luta de Classes",
    "originalTitle": "Highest 2 Lowest",
    "category": "acao",
    "categoryName": "AÇÃO E AVENTURA",
    "year": 2025,
    "director": "Spike Lee",
    "initialHint": "Um homem poderoso precisa decidir quanto está disposto a perder diante de uma ameaça.",
    "trivia": "Denzel Washington protagoniza Highest 2 Lowest, dirigido por Spike Lee.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/1242434",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_069-1.jpg",
        "alt": "Detalhe ampliado: Homem de terno numa sala.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_069-2.jpg",
        "alt": "Detalhe ampliado: Pai e filho com uma bola de basquete.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_069-3.jpg",
        "alt": "Detalhe ampliado: Dois homens posam juntos.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_069-1.jpg",
        "alt": "Homem de terno numa sala."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_069-2.jpg",
        "alt": "Pai e filho com uma bola de basquete."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_069-3.jpg",
        "alt": "Dois homens posam juntos."
      }
    ],
    "synopsis": "Um empresário da indústria musical recebe uma exigência de resgate e precisa tomar uma decisão que ameaça sua fortuna. A crise expõe desigualdades, relações de poder e os limites entre proteger a própria vida e ajudar outra pessoa."
  },
  {
    "id": "personal_070",
    "title": "Mayday",
    "originalTitle": "Mayday",
    "category": "acao",
    "categoryName": "AÇÃO E AVENTURA",
    "year": 2026,
    "director": "John Francis Daley & Jonathan Goldstein",
    "initialHint": "Um piloto fica isolado do lado inimigo e precisa aceitar ajuda improvável.",
    "trivia": "Ryan Reynolds e Kenneth Branagh formam a dupla desta aventura ambientada na Guerra Fria.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/1137844",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_070-1.jpg",
        "alt": "Detalhe ampliado: Dois homens conversam numa mesa.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_070-2.jpg",
        "alt": "Detalhe ampliado: Dupla numa floresta coberta de neve.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_070-3.jpg",
        "alt": "Detalhe ampliado: Dois homens deitados na neve.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_070-1.jpg",
        "alt": "Dois homens conversam numa mesa."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_070-2.jpg",
        "alt": "Dupla numa floresta coberta de neve."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_070-3.jpg",
        "alt": "Dois homens deitados na neve."
      }
    ],
    "synopsis": "Durante a Guerra Fria, um piloto americano fica isolado em território soviético. Para tentar voltar para casa, aceita a ajuda improvável de um morador local, iniciando uma parceria atravessada por desconfiança e perigo."
  },
  {
    "id": "personal_071",
    "title": "Fundação",
    "originalTitle": "Foundation",
    "category": "ficcao",
    "categoryName": "FICÇÃO E FANTASIA",
    "year": 2021,
    "director": "David S. Goyer & Josh Friedman",
    "initialHint": "Uma previsão sobre o futuro coloca indivíduos diante do destino de uma civilização.",
    "trivia": "A série adapta o universo de Isaac Asimov, com império galáctico e planos que atravessam gerações.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/93740",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_071-1.jpg",
        "alt": "Detalhe ampliado: Estrutura no alto de uma montanha.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_071-2.jpg",
        "alt": "Detalhe ampliado: Mulher diante de símbolos dourados.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_071-3.jpg",
        "alt": "Detalhe ampliado: Homem num ambiente iluminado em dourado.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_071-1.jpg",
        "alt": "Estrutura no alto de uma montanha."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_071-2.jpg",
        "alt": "Mulher diante de símbolos dourados."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_071-3.jpg",
        "alt": "Homem num ambiente iluminado em dourado."
      }
    ],
    "synopsis": "Um matemático prevê o colapso de um império galáctico e propõe um plano para preservar o conhecimento humano. Ao longo de gerações, diferentes personagens enfrentam disputas políticas e tentam alterar o destino da civilização."
  },
  {
    "id": "personal_072",
    "title": "Brothers",
    "originalTitle": "Brothers",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2026,
    "director": "Matthew McConaughey & Woody Harrelson & David West Read & Lee Eisenberg",
    "initialHint": "Dois amigos descobrem um segredo que pode transformar a maneira como veem a própria família.",
    "trivia": "Matthew McConaughey e Woody Harrelson interpretam versões ficcionais de si mesmos nesta comédia.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/250203",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_072-1.jpg",
        "alt": "Detalhe ampliado: Dois homens conversam numa oficina.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_072-2.jpg",
        "alt": "Detalhe ampliado: Dois amigos caminham abraçados.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_072-3.jpg",
        "alt": "Detalhe ampliado: Dupla numa paisagem rural.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_072-1.jpg",
        "alt": "Dois homens conversam numa oficina."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_072-2.jpg",
        "alt": "Dois amigos caminham abraçados."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_072-3.jpg",
        "alt": "Dupla numa paisagem rural."
      }
    ],
    "synopsis": "Matthew McConaughey e Woody Harrelson interpretam versões ficcionais de si mesmos, amigos que decidem aproximar suas famílias. Uma descoberta inesperada sobre o passado coloca a convivência e os laços entre eles sob uma nova perspectiva."
  },
  {
    "id": "personal_073",
    "title": "A Proposta",
    "originalTitle": "The Proposal",
    "category": "romance",
    "categoryName": "ROMANCE",
    "year": 2009,
    "director": "Anne Fletcher",
    "initialHint": "Uma chefe e seu funcionário fazem um acordo que mistura trabalho e vida pessoal.",
    "trivia": "Sandra Bullock e Ryan Reynolds interpretam a dupla que finge um noivado para resolver um problema de imigração.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/18240",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_073-1.jpg",
        "alt": "Detalhe ampliado: Homem e mulher num escritório.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_073-2.jpg",
        "alt": "Detalhe ampliado: Homem se ajoelha diante de uma mulher na rua.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_073-3.jpg",
        "alt": "Detalhe ampliado: Casal numa festa iluminada por velas.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_073-1.jpg",
        "alt": "Homem e mulher num escritório."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_073-2.jpg",
        "alt": "Homem se ajoelha diante de uma mulher na rua."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_073-3.jpg",
        "alt": "Casal numa festa iluminada por velas."
      }
    ],
    "synopsis": "Uma executiva ameaçada de deportação convence seu assistente a fingir que os dois estão noivos. Uma visita à família dele complica o acordo e os obriga a conhecer aspectos da vida um do outro que o trabalho escondia."
  },
  {
    "id": "personal_074",
    "title": "Slow Horses",
    "originalTitle": "Slow Horses",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2022,
    "director": "",
    "initialHint": "Agentes deixados de lado ainda precisam lidar com ameaças muito sérias.",
    "trivia": "Gary Oldman interpreta Jackson Lamb, chefe de uma equipe de espiões britânicos desacreditados.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/95480",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_074-1.jpg",
        "alt": "Detalhe ampliado: Agentes numa rua escura.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_074-2.jpg",
        "alt": "Detalhe ampliado: Homem de casaco numa sala.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_074-3.jpg",
        "alt": "Detalhe ampliado: Homem grisalho segura um sorvete na rua.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_074-1.jpg",
        "alt": "Agentes numa rua escura."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_074-2.jpg",
        "alt": "Homem de casaco numa sala."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_074-3.jpg",
        "alt": "Homem grisalho segura um sorvete na rua."
      }
    ],
    "synopsis": "Agentes britânicos afastados de funções importantes trabalham numa divisão comandada pelo difícil Jackson Lamb. Apesar da reputação de fracassados, acabam envolvidos em operações perigosas que revelam disputas e segredos do serviço de inteligência."
  },
  {
    "id": "personal_075",
    "title": "Swagger",
    "originalTitle": "Swagger",
    "category": "esportes",
    "categoryName": "ESPORTES E DOCUMENTÁRIOS",
    "year": 2021,
    "director": "Reggie Rock Bythewood",
    "initialHint": "Jovens atletas tentam crescer num ambiente em que a pressão vem de todos os lados.",
    "trivia": "A série acompanha jogadores de basquete, suas famílias e treinadores.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/94245",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_075-1.jpg",
        "alt": "Detalhe ampliado: Jovem com uma bola numa quadra ao ar livre.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_075-2.jpg",
        "alt": "Detalhe ampliado: Treinador conversa com um jogador.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_075-3.jpg",
        "alt": "Detalhe ampliado: Jogador se pendura no aro da cesta.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_075-1.jpg",
        "alt": "Jovem com uma bola numa quadra ao ar livre."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_075-2.jpg",
        "alt": "Treinador conversa com um jogador."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_075-3.jpg",
        "alt": "Jogador se pendura no aro da cesta."
      }
    ],
    "synopsis": "Jovens talentos do basquete tentam construir um futuro enquanto enfrentam a pressão das competições e das expectativas dos adultos. A série acompanha jogadores, treinadores e familiares dentro e fora das quadras."
  },
  {
    "id": "personal_076",
    "title": "The Dink: A Última Chance",
    "originalTitle": "The Dink",
    "category": "esportes",
    "categoryName": "ESPORTES E DOCUMENTÁRIOS",
    "year": 2026,
    "director": "Josh Greenbaum",
    "initialHint": "Um jogador precisa encarar uma mudança de modalidade para tentar recomeçar.",
    "trivia": "A comédia coloca o universo do pickleball no caminho de um antigo talento do tênis.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/1361774",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_076-1.jpg",
        "alt": "Detalhe ampliado: Dois homens se cumprimentam.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_076-2.jpg",
        "alt": "Detalhe ampliado: Casal conversa numa quadra.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_076-3.jpg",
        "alt": "Detalhe ampliado: Homem de faixa na cabeça numa quadra.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_076-1.jpg",
        "alt": "Dois homens se cumprimentam."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_076-2.jpg",
        "alt": "Casal conversa numa quadra."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_076-3.jpg",
        "alt": "Homem de faixa na cabeça numa quadra."
      }
    ],
    "synopsis": "Um antigo talento do tênis precisa lidar com mudanças na carreira e encontra no pickleball uma oportunidade inesperada. A nova modalidade o obriga a repensar seu orgulho, suas relações e o significado de recomeçar."
  },
  {
    "id": "personal_077",
    "title": "Falando a Real",
    "originalTitle": "Shrinking",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2023,
    "director": "Brett Goldstein & Jason Segel & Bill Lawrence",
    "initialHint": "Um profissional começa a quebrar suas próprias regras enquanto enfrenta uma perda.",
    "trivia": "Jason Segel interpreta um terapeuta que passa a falar sem rodeios com os pacientes.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/136311",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_077-1.jpg",
        "alt": "Detalhe ampliado: Dois terapeutas num banco de jardim.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_077-2.jpg",
        "alt": "Detalhe ampliado: Homem atrás de um colega sentado.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_077-3.jpg",
        "alt": "Detalhe ampliado: Dupla ao lado de um carro azul.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_077-1.jpg",
        "alt": "Dois terapeutas num banco de jardim."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_077-2.jpg",
        "alt": "Homem atrás de um colega sentado."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_077-3.jpg",
        "alt": "Dupla ao lado de um carro azul."
      }
    ],
    "synopsis": "Um terapeuta em luto começa a abandonar a postura profissional cautelosa e falar diretamente o que pensa aos pacientes. Suas decisões afetam o consultório, as amizades e a relação com a filha, enquanto tenta reconstruir a própria vida."
  },
  {
    "id": "personal_078",
    "title": "Acapulco",
    "originalTitle": "Acapulco",
    "category": "series",
    "categoryName": "SÉRIES",
    "year": 2021,
    "director": "Austin Winsberg & Jason Shuman & Eduardo Cisneros",
    "initialHint": "Um jovem começa a trabalhar num lugar luxuoso e descobre seus bastidores.",
    "trivia": "A comédia acompanha as lembranças de Máximo sobre sua juventude num resort mexicano.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/133727",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_078-1.jpg",
        "alt": "Detalhe ampliado: Rapaz uniformizado num resort.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_078-2.jpg",
        "alt": "Detalhe ampliado: Dois funcionários num jardim tropical.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_078-3.jpg",
        "alt": "Detalhe ampliado: Equipe num resort colorido.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_078-1.jpg",
        "alt": "Rapaz uniformizado num resort."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_078-2.jpg",
        "alt": "Dois funcionários num jardim tropical."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_078-3.jpg",
        "alt": "Equipe num resort colorido."
      }
    ],
    "synopsis": "Máximo relembra sua juventude trabalhando num resort de luxo em Acapulco nos anos 1980. Entre hóspedes exigentes, colegas e romances, ele tenta crescer profissionalmente sem perder os valores e as pessoas importantes para sua vida."
  },
  {
    "id": "personal_079",
    "title": "Silo",
    "originalTitle": "Silo",
    "category": "ficcao",
    "categoryName": "FICÇÃO E FANTASIA",
    "year": 2023,
    "director": "Graham Yost",
    "initialHint": "Uma comunidade vive isolada e começa a questionar as regras que a mantêm protegida.",
    "trivia": "Rebecca Ferguson protagoniza a série sobre pessoas que habitam uma enorme estrutura subterrânea.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/tv/125988",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_079-1.jpg",
        "alt": "Detalhe ampliado: Mulher junto a uma escadaria industrial.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_079-2.jpg",
        "alt": "Detalhe ampliado: Mulher sob luz azul.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_079-3.jpg",
        "alt": "Detalhe ampliado: Pessoa com traje de proteção numa paisagem desolada.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_079-1.jpg",
        "alt": "Mulher junto a uma escadaria industrial."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_079-2.jpg",
        "alt": "Mulher sob luz azul."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_079-3.jpg",
        "alt": "Pessoa com traje de proteção numa paisagem desolada."
      }
    ],
    "synopsis": "Milhares de pessoas vivem numa enorme construção subterrânea protegida por regras rígidas. Ao investigar uma morte, uma engenheira começa a questionar as explicações sobre o mundo exterior e descobre segredos que ameaçam toda a comunidade."
  },
  {
    "id": "personal_080",
    "title": "Toriko × One Piece × Dragon Ball Z: Especial de Colaboração",
    "originalTitle": "Dream 9 Toriko & One Piece & Dragon Ball Z Super Collaboration Special!!",
    "category": "anime",
    "categoryName": "ANIMES",
    "year": 2013,
    "director": "Mitsuo Hashimoto & Akifumi Zako",
    "initialHint": "Heróis de universos diferentes se encontram numa aventura conjunta.",
    "trivia": "O especial reúne personagens de Toriko, One Piece e Dragon Ball Z.",
    "sourceGroup": "historico",
    "sourceUrl": "https://www.themoviedb.org/movie/188070",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_080-1.jpg",
        "alt": "Detalhe ampliado: Heróis voam num céu azul.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_080-2.jpg",
        "alt": "Detalhe ampliado: Três heróis de cabelos diferentes.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_080-3.jpg",
        "alt": "Detalhe ampliado: Personagens de diferentes aventuras reunidos.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_080-1.jpg",
        "alt": "Heróis voam num céu azul."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_080-2.jpg",
        "alt": "Três heróis de cabelos diferentes."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_080-3.jpg",
        "alt": "Personagens de diferentes aventuras reunidos."
      }
    ],
    "synopsis": "Personagens de Toriko, One Piece e Dragon Ball Z se encontram num especial que mistura seus universos. Uma disputa e novos desafios aproximam os heróis numa aventura conjunta marcada por competição, comida e combate."
  },
  {
    "id": "personal_081",
    "title": "Esqueceram de Mim",
    "originalTitle": "Home Alone",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 1990,
    "director": "Chris Columbus",
    "initialHint": "Uma viagem em família dá errado quando alguém fica para trás.",
    "trivia": "Kevin McCallister precisa proteger a casa de dois ladrões durante o Natal.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/771",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_081-1.jpg",
        "alt": "Detalhe ampliado: Casa iluminada para o Natal.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_081-2.jpg",
        "alt": "Detalhe ampliado: Menino usando gorro vermelho.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_081-3.jpg",
        "alt": "Detalhe ampliado: Menino junto a uma árvore de Natal.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_081-1.jpg",
        "alt": "Casa iluminada para o Natal."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_081-2.jpg",
        "alt": "Menino usando gorro vermelho."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_081-3.jpg",
        "alt": "Menino junto a uma árvore de Natal."
      }
    ],
    "synopsis": "Kevin fica sozinho em casa depois que a família viaja para o Natal sem perceber sua ausência. Quando dois ladrões escolhem a residência como alvo, ele prepara uma série de armadilhas para defender seu território."
  },
  {
    "id": "personal_082",
    "title": "Esqueceram de Mim 2: Perdido em Nova York",
    "originalTitle": "Home Alone 2: Lost in New York",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 1992,
    "director": "Chris Columbus",
    "initialHint": "Uma confusão no aeroporto deixa um garoto numa cidade diferente da família.",
    "trivia": "Kevin reencontra os ladrões e prepara novas armadilhas em Nova York.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/772",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_082-1.jpg",
        "alt": "Detalhe ampliado: Garoto sentado num avião.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_082-2.jpg",
        "alt": "Detalhe ampliado: Dois homens espiam atrás de um jornal.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_082-3.jpg",
        "alt": "Detalhe ampliado: Menino e dois homens numa loja de brinquedos.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_082-1.jpg",
        "alt": "Garoto sentado num avião."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_082-2.jpg",
        "alt": "Dois homens espiam atrás de um jornal."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_082-3.jpg",
        "alt": "Menino e dois homens numa loja de brinquedos."
      }
    ],
    "synopsis": "Uma confusão no aeroporto separa Kevin da família e o leva sozinho a Nova York. Na cidade, ele reencontra os ladrões que enfrentou antes e precisa usar a criatividade para impedir outro crime durante o Natal."
  },
  {
    "id": "personal_083",
    "title": "Klaus",
    "originalTitle": "Klaus",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2019,
    "director": "Sergio Pablos",
    "initialHint": "Um trabalhador enviado a um lugar distante encontra alguém que pode mudar a comunidade.",
    "trivia": "Uma amizade entre um carteiro e um fabricante de brinquedos dá origem a uma tradição de presentes.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/508965",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_083-1.jpg",
        "alt": "Detalhe ampliado: Cidade nevada iluminada à noite.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_083-2.jpg",
        "alt": "Detalhe ampliado: Carteiro segura uma carta.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_083-3.jpg",
        "alt": "Detalhe ampliado: Homem de barba branca num telhado à noite.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_083-1.jpg",
        "alt": "Cidade nevada iluminada à noite."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_083-2.jpg",
        "alt": "Carteiro segura uma carta."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_083-3.jpg",
        "alt": "Homem de barba branca num telhado à noite."
      }
    ],
    "synopsis": "Um jovem carteiro é enviado para uma cidade isolada cujos moradores vivem em conflito. Sua amizade com um fabricante de brinquedos começa a mudar a comunidade e dá origem a uma tradição de generosidade."
  },
  {
    "id": "personal_084",
    "title": "O Grinch (2000)",
    "originalTitle": "How the Grinch Stole Christmas",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2000,
    "director": "Ron Howard",
    "initialHint": "Um morador solitário resolve atrapalhar a festa que todos estão preparando.",
    "trivia": "Jim Carrey interpreta a criatura verde que tenta roubar o Natal dos habitantes de Quemlândia.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/8871",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_084-1.jpg",
        "alt": "Detalhe ampliado: Criatura verde numa casa coberta de gelo.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_084-2.jpg",
        "alt": "Detalhe ampliado: Criatura verde conversa com o prefeito.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_084-3.jpg",
        "alt": "Detalhe ampliado: Criatura verde fantasiada e uma menina.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_084-1.jpg",
        "alt": "Criatura verde numa casa coberta de gelo."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_084-2.jpg",
        "alt": "Criatura verde conversa com o prefeito."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_084-3.jpg",
        "alt": "Criatura verde fantasiada e uma menina."
      }
    ],
    "synopsis": "Uma criatura verde que vive afastada de Quemlândia não suporta a alegria das festas de fim de ano. Decidida a acabar com a celebração, planeja roubar presentes e enfeites, mas encontra uma menina que desafia sua visão do Natal."
  },
  {
    "id": "personal_085",
    "title": "O Grinch (2018)",
    "originalTitle": "The Grinch",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2018,
    "director": "Scott Mosier & Yarrow Cheney",
    "initialHint": "Uma criatura mal-humorada prepara um plano contra a celebração de seus vizinhos.",
    "trivia": "A animação de 2018 acompanha o Grinch e o cachorro Max em uma tentativa de acabar com o Natal.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/360920",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_085-1.jpg",
        "alt": "Detalhe ampliado: Criatura verde numa casa cheia de objetos.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_085-2.jpg",
        "alt": "Detalhe ampliado: Criatura verde usando fones de ouvido.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_085-3.jpg",
        "alt": "Detalhe ampliado: Criatura verde ao lado do cachorro.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_085-1.jpg",
        "alt": "Criatura verde numa casa cheia de objetos."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_085-2.jpg",
        "alt": "Criatura verde usando fones de ouvido."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_085-3.jpg",
        "alt": "Criatura verde ao lado do cachorro."
      }
    ],
    "synopsis": "O Grinch vive com o cachorro Max e tenta evitar o entusiasmo natalino de seus vizinhos. Incomodado com uma celebração cada vez maior, prepara um plano para roubar o Natal e descobre algo que seu isolamento não lhe permitia enxergar."
  },
  {
    "id": "personal_086",
    "title": "Um Duende em Nova York",
    "originalTitle": "Elf",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2003,
    "director": "Jon Favreau",
    "initialHint": "Um adulto criado num lugar mágico viaja para encontrar sua família.",
    "trivia": "Will Ferrell interpreta Buddy, um humano criado por duendes que chega a Nova York.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/10719",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_086-1.jpg",
        "alt": "Detalhe ampliado: Homem vestido de duende numa sala de aula.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_086-2.jpg",
        "alt": "Detalhe ampliado: Homem de roupa verde junto a uma mesa.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_086-3.jpg",
        "alt": "Detalhe ampliado: Homem vestido de duende numa loja natalina.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_086-1.jpg",
        "alt": "Homem vestido de duende numa sala de aula."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_086-2.jpg",
        "alt": "Homem de roupa verde junto a uma mesa."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_086-3.jpg",
        "alt": "Homem vestido de duende numa loja natalina."
      }
    ],
    "synopsis": "Criado por duendes no Polo Norte, Buddy descobre que é humano e viaja a Nova York para encontrar o pai. Sua inocência e entusiasmo pelo Natal entram em choque com a rotina da cidade e da nova família."
  },
  {
    "id": "personal_087",
    "title": "O Expresso Polar",
    "originalTitle": "The Polar Express",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2004,
    "director": "Robert Zemeckis",
    "initialHint": "Uma viagem noturna leva crianças a um destino extraordinário.",
    "trivia": "Um trem misterioso parte rumo ao Polo Norte na véspera de Natal.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/5255",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_087-1.jpg",
        "alt": "Detalhe ampliado: Garoto ao lado de uma locomotiva.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_087-2.jpg",
        "alt": "Detalhe ampliado: Trem dourado atravessa a neve.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_087-3.jpg",
        "alt": "Detalhe ampliado: Criança diante de um trem à noite.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_087-1.jpg",
        "alt": "Garoto ao lado de uma locomotiva."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_087-2.jpg",
        "alt": "Trem dourado atravessa a neve."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_087-3.jpg",
        "alt": "Criança diante de um trem à noite."
      }
    ],
    "synopsis": "Na véspera de Natal, um menino embarca num trem misterioso que leva crianças ao Polo Norte. A viagem atravessa paisagens extraordinárias e desafios que o fazem reconsiderar suas dúvidas sobre a magia natalina."
  },
  {
    "id": "personal_088",
    "title": "Crônicas de Natal",
    "originalTitle": "The Christmas Chronicles",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2018,
    "director": "Clay Kaytis",
    "initialHint": "Dois irmãos se envolvem num acidente que ameaça a entrega de presentes.",
    "trivia": "Kurt Russell interpreta o Papai Noel numa aventura para salvar a noite de Natal.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/527435",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_088-1.jpg",
        "alt": "Detalhe ampliado: Dois irmãos numa floresta nevada.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_088-2.jpg",
        "alt": "Detalhe ampliado: Homem de barba branca dentro de um carro.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_088-3.jpg",
        "alt": "Detalhe ampliado: Homem de roupa vermelha sobre um trenó.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_088-1.jpg",
        "alt": "Dois irmãos numa floresta nevada."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_088-2.jpg",
        "alt": "Homem de barba branca dentro de um carro."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_088-3.jpg",
        "alt": "Homem de roupa vermelha sobre um trenó."
      }
    ],
    "synopsis": "Dois irmãos tentam filmar a chegada do Papai Noel e acabam provocando um acidente com seu trenó. Agora precisam ajudá-lo a recuperar os presentes e salvar as entregas antes que a noite de Natal termine."
  },
  {
    "id": "personal_089",
    "title": "Crônicas de Natal 2",
    "originalTitle": "The Christmas Chronicles: Part Two",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2020,
    "director": "Chris Columbus",
    "initialHint": "Uma visita ao Polo Norte se transforma numa missão para proteger a festa.",
    "trivia": "Papai Noel e Mamãe Noel enfrentam uma ameaça à vila natalina nesta continuação.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/654028",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_089-1.jpg",
        "alt": "Detalhe ampliado: Três jovens num ambiente de madeira.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_089-2.jpg",
        "alt": "Detalhe ampliado: Homem de barba branca numa vila nevada.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_089-3.jpg",
        "alt": "Detalhe ampliado: Casal de cabelos brancos numa sala.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_089-1.jpg",
        "alt": "Três jovens num ambiente de madeira."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_089-2.jpg",
        "alt": "Homem de barba branca numa vila nevada."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_089-3.jpg",
        "alt": "Casal de cabelos brancos numa sala."
      }
    ],
    "synopsis": "Kate volta a encontrar Papai Noel quando uma ameaça coloca em risco sua vila no Polo Norte. Ao lado de novos aliados e de Mamãe Noel, ela participa de uma missão para proteger a celebração."
  },
  {
    "id": "personal_090",
    "title": "A Princesa e a Plebeia",
    "originalTitle": "The Princess Switch",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2018,
    "director": "Mike Rohl",
    "initialHint": "Duas mulheres muito parecidas resolvem experimentar a vida uma da outra.",
    "trivia": "Vanessa Hudgens interpreta uma confeiteira e uma duquesa que trocam de lugar antes do Natal.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/556803",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_090-1.jpg",
        "alt": "Detalhe ampliado: Casal dança num baile.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_090-2.jpg",
        "alt": "Detalhe ampliado: Casal com roupas de realeza.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_090-3.jpg",
        "alt": "Detalhe ampliado: Duas mulheres muito parecidas com seus parceiros.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_090-1.jpg",
        "alt": "Casal dança num baile."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_090-2.jpg",
        "alt": "Casal com roupas de realeza."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_090-3.jpg",
        "alt": "Duas mulheres muito parecidas com seus parceiros."
      }
    ],
    "synopsis": "Uma confeiteira e uma duquesa descobrem que são praticamente idênticas e combinam trocar de lugar antes do Natal. Enquanto experimentam rotinas muito diferentes, surgem romances que complicam o retorno às suas vidas."
  },
  {
    "id": "personal_091",
    "title": "A Princesa e a Plebeia: Nova Aventura",
    "originalTitle": "The Princess Switch: Switched Again",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2020,
    "director": "Mike Rohl",
    "initialHint": "Uma troca de identidades fica mais difícil com a chegada de outra pessoa muito parecida.",
    "trivia": "A continuação reúne Stacy, Margaret e Fiona, todas interpretadas por Vanessa Hudgens.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/643882",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_091-1.jpg",
        "alt": "Detalhe ampliado: Duas mulheres parecidas conversam.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_091-2.jpg",
        "alt": "Detalhe ampliado: Grupo numa festa de fim de ano.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_091-3.jpg",
        "alt": "Detalhe ampliado: Mulher de gorro diante de presentes.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_091-1.jpg",
        "alt": "Duas mulheres parecidas conversam."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_091-2.jpg",
        "alt": "Grupo numa festa de fim de ano."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_091-3.jpg",
        "alt": "Mulher de gorro diante de presentes."
      }
    ],
    "synopsis": "Uma nova troca de identidades tenta ajudar Margaret a resolver problemas no amor antes de assumir o trono. A chegada de Fiona, outra mulher com a mesma aparência, transforma o plano numa confusão de interesses e disfarces."
  },
  {
    "id": "personal_092",
    "title": "A Princesa e a Plebeia: As Vilãs Também Amam",
    "originalTitle": "The Princess Switch 3: Romancing the Star",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2021,
    "director": "Mike Rohl",
    "initialHint": "Um objeto valioso desaparece e uma pessoa pouco confiável pode ser a solução.",
    "trivia": "A terceira aventura da franquia mistura identidades trocadas, romance e o roubo de uma relíquia natalina.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/785533",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_092-1.jpg",
        "alt": "Detalhe ampliado: Mulher sorri diante de luzes natalinas.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_092-2.jpg",
        "alt": "Detalhe ampliado: Casal dança junto à lareira.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_092-3.jpg",
        "alt": "Detalhe ampliado: Três mulheres muito parecidas vestidas para uma festa.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_092-1.jpg",
        "alt": "Mulher sorri diante de luzes natalinas."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_092-2.jpg",
        "alt": "Casal dança junto à lareira."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_092-3.jpg",
        "alt": "Três mulheres muito parecidas vestidas para uma festa."
      }
    ],
    "synopsis": "Quando uma relíquia natalina é roubada, Stacy e Margaret recorrem a Fiona para recuperá-la. A missão reúne trocas de identidade, um plano de assalto e um reencontro que pode mudar os sentimentos da prima."
  },
  {
    "id": "personal_093",
    "title": "Noelle",
    "originalTitle": "Noelle",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2019,
    "director": "Marc Lawrence",
    "initialHint": "Uma jovem precisa ajudar a família quando uma grande responsabilidade muda de mãos.",
    "trivia": "Anna Kendrick interpreta a filha do Papai Noel, que sai à procura do irmão.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/454467",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_093-1.jpg",
        "alt": "Detalhe ampliado: Duas mulheres numa viagem noturna.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_093-2.jpg",
        "alt": "Detalhe ampliado: Mulher de gorro vermelho numa rua.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_093-3.jpg",
        "alt": "Detalhe ampliado: Dois irmãos vestem roupas vermelhas de Natal.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_093-1.jpg",
        "alt": "Duas mulheres numa viagem noturna."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_093-2.jpg",
        "alt": "Mulher de gorro vermelho numa rua."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_093-3.jpg",
        "alt": "Dois irmãos vestem roupas vermelhas de Natal."
      }
    ],
    "synopsis": "Noelle tenta apoiar o irmão quando ele precisa assumir o posto de Papai Noel. Depois que ele desaparece, ela sai do Polo Norte para procurá-lo e acaba descobrindo habilidades e responsabilidades que não imaginava ter."
  },
  {
    "id": "personal_094",
    "title": "Operação Presente",
    "originalTitle": "Arthur Christmas",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2011,
    "director": "Sarah Smith",
    "initialHint": "Um presente esquecido provoca uma corrida para que nenhuma criança fique de fora.",
    "trivia": "Arthur, filho do Papai Noel, tenta corrigir um erro na entrega de presentes.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/51052",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_094-1.jpg",
        "alt": "Detalhe ampliado: Trenó e renas voam sob a lua.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_094-2.jpg",
        "alt": "Detalhe ampliado: Rapaz segura um presente.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_094-3.jpg",
        "alt": "Detalhe ampliado: Dois homens com roupas natalinas numa central de controle.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_094-1.jpg",
        "alt": "Trenó e renas voam sob a lua."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_094-2.jpg",
        "alt": "Rapaz segura um presente."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_094-3.jpg",
        "alt": "Dois homens com roupas natalinas numa central de controle."
      }
    ],
    "synopsis": "A operação tecnológica de entrega de presentes deixa uma criança para trás por engano. Arthur, o filho mais novo do Papai Noel, parte numa missão improvisada para corrigir o erro antes da manhã de Natal."
  },
  {
    "id": "personal_095",
    "title": "Uma Invenção de Natal",
    "originalTitle": "Jingle Jangle: A Christmas Journey",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2020,
    "director": "David E. Talbert",
    "initialHint": "Um inventor encontra uma nova esperança com a chegada de uma pessoa da família.",
    "trivia": "Um fabricante de brinquedos e sua neta vivem uma aventura musical de Natal.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/622855",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_095-1.jpg",
        "alt": "Detalhe ampliado: Duas meninas numa paisagem nevada.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_095-2.jpg",
        "alt": "Detalhe ampliado: Menina e inventor numa oficina.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_095-3.jpg",
        "alt": "Detalhe ampliado: Homem ao lado de uma criança numa oficina.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_095-1.jpg",
        "alt": "Duas meninas numa paisagem nevada."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_095-2.jpg",
        "alt": "Menina e inventor numa oficina."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_095-3.jpg",
        "alt": "Homem ao lado de uma criança numa oficina."
      }
    ],
    "synopsis": "Um inventor de brinquedos perdeu a confiança depois de ser traído por seu aprendiz. A chegada da neta reabre espaço para a imaginação e aproxima os dois numa aventura que pode recuperar sua esperança."
  },
  {
    "id": "personal_096",
    "title": "Spirited: Um Conto Natalino",
    "originalTitle": "Spirited",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2022,
    "director": "Sean Anders",
    "initialHint": "Um homem muito resistente à mudança recebe visitas que tentam fazê-lo reconsiderar sua vida.",
    "trivia": "Will Ferrell e Ryan Reynolds protagonizam uma releitura musical de Um Conto de Natal.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/632856",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_096-1.jpg",
        "alt": "Detalhe ampliado: Dupla conversa numa sala.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_096-2.jpg",
        "alt": "Detalhe ampliado: Homens dançam numa rua iluminada.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_096-3.jpg",
        "alt": "Detalhe ampliado: Grupo dança num cenário de espetáculo.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_096-1.jpg",
        "alt": "Dupla conversa numa sala."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_096-2.jpg",
        "alt": "Homens dançam numa rua iluminada."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_096-3.jpg",
        "alt": "Grupo dança num cenário de espetáculo."
      }
    ],
    "synopsis": "Uma equipe de espíritos tenta transformar pessoas egoístas usando visitas ao passado, presente e futuro. O alvo da vez resiste ao processo e provoca mudanças também em quem conduz a missão, numa releitura musical de Um Conto de Natal."
  },
  {
    "id": "personal_097",
    "title": "Amor com Data Marcada",
    "originalTitle": "Holidate",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2020,
    "director": "John Whitesell",
    "initialHint": "Duas pessoas combinam ser companhia uma da outra nas datas em que estar solteiro incomoda.",
    "trivia": "Emma Roberts e Luke Bracey interpretam a dupla que transforma festas em encontros combinados.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/615665",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_097-1.jpg",
        "alt": "Detalhe ampliado: Casal numa lanchonete.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_097-2.jpg",
        "alt": "Detalhe ampliado: Duas mulheres conversam num restaurante.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_097-3.jpg",
        "alt": "Detalhe ampliado: Casal à mesa sob luzes coloridas.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_097-1.jpg",
        "alt": "Casal numa lanchonete."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_097-2.jpg",
        "alt": "Duas mulheres conversam num restaurante."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_097-3.jpg",
        "alt": "Casal à mesa sob luzes coloridas."
      }
    ],
    "synopsis": "Cansados da pressão para aparecer acompanhados em festas, dois solteiros combinam ser o par um do outro nas datas comemorativas. O acordo funciona até que sentimentos inesperados começam a desafiar suas regras."
  },
  {
    "id": "personal_098",
    "title": "Um Match Surpresa",
    "originalTitle": "Love Hard",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2021,
    "director": "Hernán Jiménez",
    "initialHint": "Uma viagem para conhecer alguém da internet traz uma surpresa inesperada.",
    "trivia": "Nina Dobrev interpreta uma mulher que descobre um engano ao visitar seu pretendente no Natal.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/734265",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_098-1.jpg",
        "alt": "Detalhe ampliado: Homem numa cama articulada.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_098-2.jpg",
        "alt": "Detalhe ampliado: Família numa refeição.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_098-3.jpg",
        "alt": "Detalhe ampliado: Mulher junto a uma árvore de Natal.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_098-1.jpg",
        "alt": "Homem numa cama articulada."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_098-2.jpg",
        "alt": "Família numa refeição."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_098-3.jpg",
        "alt": "Mulher junto a uma árvore de Natal."
      }
    ],
    "synopsis": "Uma mulher viaja para surpreender no Natal o rapaz que conheceu num aplicativo e descobre que foi enganada. Ao permanecer na cidade, aceita uma proposta para conhecer outro pretendente e se aproxima de quem não esperava."
  },
  {
    "id": "personal_099",
    "title": "Uma Segunda Chance para Amar",
    "originalTitle": "Last Christmas",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2019,
    "director": "Paul Feig",
    "initialHint": "Uma jovem que trabalha numa loja temática encontra alguém que muda sua rotina.",
    "trivia": "Emilia Clarke e Henry Golding protagonizam o romance londrino inspirado em músicas de George Michael.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/549053",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_099-1.jpg",
        "alt": "Detalhe ampliado: Casal conversa numa praça à noite.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_099-2.jpg",
        "alt": "Detalhe ampliado: Casal diante de enfeites natalinos.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_099-3.jpg",
        "alt": "Detalhe ampliado: Casal num banco de jardim coberto de neve.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_099-1.jpg",
        "alt": "Casal conversa numa praça à noite."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_099-2.jpg",
        "alt": "Casal diante de enfeites natalinos."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_099-3.jpg",
        "alt": "Casal num banco de jardim coberto de neve."
      }
    ],
    "synopsis": "Kate trabalha numa loja natalina de Londres e vive uma fase de decisões ruins e dificuldades pessoais. Seu encontro com Tom muda a maneira como observa a cidade, suas relações e as oportunidades de reconstruir a própria vida."
  },
  {
    "id": "personal_100",
    "title": "O Diário de Noel",
    "originalTitle": "The Noel Diary",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2022,
    "director": "Charles Shyer",
    "initialHint": "O retorno à casa da família coloca um escritor diante de lembranças e de uma nova companhia.",
    "trivia": "Justin Hartley interpreta um autor que encontra um diário e conhece uma mulher em busca de respostas.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/736918",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_100-1.jpg",
        "alt": "Detalhe ampliado: Mulher numa floresta coberta de neve.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_100-2.jpg",
        "alt": "Detalhe ampliado: Homem dirige ao lado de um cachorro.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_100-3.jpg",
        "alt": "Detalhe ampliado: Casal numa caminhonete decorada para o Natal.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_100-1.jpg",
        "alt": "Mulher numa floresta coberta de neve."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_100-2.jpg",
        "alt": "Homem dirige ao lado de um cachorro."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_100-3.jpg",
        "alt": "Casal numa caminhonete decorada para o Natal."
      }
    ],
    "synopsis": "Um escritor volta à casa da família e encontra um diário que guarda pistas sobre o passado. Ao conhecer uma mulher que também procura respostas, inicia uma viagem em que memórias e novos sentimentos se entrelaçam."
  },
  {
    "id": "personal_101",
    "title": "Tudo Bem no Natal que Vem",
    "originalTitle": "Tudo Bem no Natal que Vem",
    "category": "natal",
    "categoryName": "NATAL",
    "year": 2020,
    "director": "Roberto Santucci",
    "initialHint": "Um homem que não gosta de uma celebração passa a viver uma estranha repetição.",
    "trivia": "Leandro Hassum interpreta Jorge, que acorda sempre no Natal do ano seguinte.",
    "sourceGroup": "natal-extra",
    "sourceUrl": "https://www.themoviedb.org/movie/755339",
    "stages": [
      {
        "step": 1,
        "points": 6,
        "image": "assets/frames/personal_101-1.jpg",
        "alt": "Detalhe ampliado: Casal dorme numa sala.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 2,
        "points": 5,
        "image": "assets/frames/personal_101-2.jpg",
        "alt": "Detalhe ampliado: Homem dirige usando roupas natalinas.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 3,
        "points": 4,
        "image": "assets/frames/personal_101-3.jpg",
        "alt": "Detalhe ampliado: Família reunida em roupas de Natal.",
        "zoom": 2.6,
        "origin": "50% 50%"
      },
      {
        "step": 4,
        "points": 3,
        "image": "assets/frames/personal_101-1.jpg",
        "alt": "Casal dorme numa sala."
      },
      {
        "step": 5,
        "points": 2,
        "image": "assets/frames/personal_101-2.jpg",
        "alt": "Homem dirige usando roupas natalinas."
      },
      {
        "step": 6,
        "points": 1,
        "image": "assets/frames/personal_101-3.jpg",
        "alt": "Família reunida em roupas de Natal."
      }
    ],
    "synopsis": "Jorge sofre um acidente na véspera de Natal e passa a acordar apenas na mesma data dos anos seguintes. Sem lembrar dos outros dias, precisa enfrentar as consequências de suas escolhas e reconsiderar sua relação com a família."
  }
];
