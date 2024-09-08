let dados = [
    {
        nome: "Max Verstappen",
        imagem: "images/max-verstappen.jpg",
        idade: "26 anos",
        nacionalidade: "Holanda",
        equipe: "Red Bull Racing",
        descricao: "Max Verstappen é um dos pilotos mais dominantes da Fórmula 1 atual. Com um talento nato para as corridas e uma agressividade que o tornou conhecido no mundo todo, o piloto holandês conquistou diversos títulos mundiais e se consolidou como um dos maiores nomes da história da categoria.",
        link: "https://pt.wikipedia.org/wiki/Max_Verstappen",
        tags: "red bull, redbull, holandes"
    },
    {
        nome: "Sergio Pérez",
        equipe: "Red Bull Racing",
        imagem: "images/sergio-perez.jpg",
        idade: "34 anos",
        nacionalidade: "México",
        descricao: "Sergio Pérez é um piloto mexicano conhecido por sua consistência e habilidade em ultrapassagens. Ele tem sido uma peça fundamental para o sucesso da Red Bull Racing.",
        link: "https://pt.wikipedia.org/wiki/Sergio_Pérez",
        tags: "red bull, redbull"
    },
    {
        nome: "Lewis Hamilton",
        imagem: "images/lewis-hamilton.jpg",
        equipe: "Mercedes",
        idade: "39 anos",
        nacionalidade: "Inglaterra",
        descricao: "Lewis Hamilton é um dos pilotos mais bem-sucedidos da história da Fórmula 1, com múltiplos títulos mundiais conquistados pela Mercedes. Conhecido por sua habilidade técnica e pela luta por igualdade, Hamilton é um ícone do esporte e um dos atletas mais influentes do mundo.",
        link: "https://pt.wikipedia.org/wiki/Lewis_Hamilton",
        tags: "mercedez, mercedes-benz, mercedez-benz, ingles, inglês"
    },
    {
        nome: "George Russell",
        equipe: "Mercedes",
        imagem: "images/george-russell.jpg",
        idade: "26 anos",
        nacionalidade: "Inglaterra",
        descricao: "George Russell é um jovem piloto britânico considerado uma das grandes promessas da Fórmula 1. Ele se destacou na Fórmula 2 antes de chegar à categoria principal.",
        link: "https://pt.wikipedia.org/wiki/George_Russell",
        tags: "mercedez, mercedes-benz, mercedez-benz, ingles, inglês"
    },
    {
        nome: "Charles Leclerc",
        equipe: "Ferrari",
        imagem: "images/charles-leclerc.jpg",
        idade: "26 anos",
        nacionalidade: "Mônaco",
        descricao: "Charles Leclerc é um jovem piloto monegasco que se destaca pela sua velocidade e talento. Considerado uma das grandes promessas da Fórmula 1, Leclerc já conquistou diversas vitórias e se tornou um dos favoritos dos fãs.",
        link: "https://pt.wikipedia.org/wiki/Charles_Leclerc",
        tags: "ferrarri, ferari, monaco"
    },
    {
        nome: "Carlos Sainz",
        equipe: "Ferrari",
        imagem: "images/carlos-sainz.jpg",
        idade: "30 anos",
        nacionalidade: "Espanha",
        descricao: "Carlos Sainz é um piloto espanhol com vasta experiência na Fórmula 1. Conhecido por sua consistência e habilidade em ultrapassagens, ele é um dos pilares da Ferrari.",
        link: "https://pt.wikipedia.org/wiki/Carlos_Sainz_Jr.",
        tags: "ferrarri, ferari, carlando"
    },
    {
        nome: "Lando Norris",
        equipe: "McLaren",
        imagem: "images/lando-norris.jpg",
        idade: "24 anos",
        nacionalidade: "Inglaterra",
        descricao: "Lando Norris é um jovem piloto britânico que se destacou desde as categorias de base. Ele é conhecido por seu estilo de pilotagem agressivo e carismático.",
        link: "https://pt.wikipedia.org/wiki/Lando_Norris",
        tags: "carlando, noia, britanico, ingles, inglês"
    },
    {
        nome: "Oscar Piastri",
        equipe: "McLaren",
        imagem: "images/oscar-piastri.jpg",
        idade: "23 anos",
        nacionalidade: "Austrália",
        descricao: "Oscar Piastri é um jovem piloto australiano que se destacou nas categorias de base e chegou à Fórmula 1 com grandes expectativas.",
        link: "https://pt.wikipedia.org/wiki/Oscar_Piastri",
        tags: "piloto mais jovem, piloto jovem"
    },
    {
        nome: "Lance Stroll",
        equipe: "Aston Martin",
        imagem: "images/lance-stroll.jpg",
        idade: "25 anos",
        nacionalidade: "Canadá",
        descricao: "Lance Stroll é um piloto canadense que chegou à Fórmula 1 com o apoio de seu pai, o bilionário Lawrence Stroll. Ele tem se desenvolvido bastante desde sua estreia.",
        link: "https://pt.wikipedia.org/wiki/Lance_Stroll",
        tags: "aston"
    },
    {
        nome: "Fernando Alonso",
        equipe: "Aston Martin",
        imagem: "images/fernando-alonso.jpg",
        idade: "43 anos",
        nacionalidade: "Espanha",
        descricao: "Fernando Alonso é um dos pilotos mais experientes e bem-sucedidos da história da Fórmula 1, com dois títulos mundiais conquistados. Ele é conhecido por sua paixão pela corrida e sua habilidade técnica.",
        link: "https://pt.wikipedia.org/wiki/Fernando_Alonso",
        tags: "aston, vovo, vovo alonso, espanhol"
    },
    {
        nome: "Esteban Ocon",
        equipe: "Alpine",
        imagem: "images/esteban-ocon.jpg",
        idade: "27 anos",
        nacionalidade: "França",
        descricao: "Esteban Ocon é um piloto francês que se destacou nas categorias de base e chegou à Fórmula 1 com o apoio da Renault. Ele é conhecido por sua consistência e habilidade em ultrapassagens.",
        link: "https://pt.wikipedia.org/wiki/Esteban_Ocon",
        tags: ""
    },
    {
        nome: "Pierre Gasly",
        equipe: "Alpine",
        imagem: "images/pierre-gasly.jpg",
        idade: "28 anos",
        nacionalidade: "França",
        descricao: "Pierre Gasly é um piloto francês que já conquistou uma vitória na Fórmula 1. Ele é conhecido por sua velocidade e habilidade em ultrapassagens.",
        link: "https://pt.wikipedia.org/wiki/Pierre_Gasly",
        tags: ""
    },
    {
        nome: "Alexander Albon",
        equipe: "Williams",
        imagem: "images/alex-albon.jpg",
        idade: "28 anos",
        nacionalidade: "Tailândia",
        descricao: "Alexander Albon é um piloto tailandês-britânico que já competiu pela Red Bull Racing. Ele é conhecido por sua consistência e habilidade em desenvolver o carro.",
        link: "https://pt.wikipedia.org/wiki/Alexander_Albon",
        tags: ""
    },
    {
        nome: "Franco Colapinto",
        equipe: "Williams",
        imagem: "images/franco-colapinto.jpg",
        idade: "21 anos",
        nacionalidade: "Argentina",
        descricao: "Franco Colapinto é um jovem piloto argentino que está fazendo história na Fórmula 1. Nascido em 27 de maio de 2003, em Pilar, Argentina, ele é o primeiro piloto argentino na categoria máxima do automobilismo desde Gastón Mazzacane.",
        link: "https://pt.wikipedia.org/wiki/Franco_Colapinto",
        tags: "frango"
    },
    {
        nome: "Yuki Tsunoda",
        equipe: "Racing Bulls",
        imagem: "images/yuki-tsunoda.jpg",
        idade: "24 anos",
        nacionalidade: "Japão",
        descricao: "Yuki Tsunoda é um jovem piloto japonês que se destacou nas categorias de base. Ele é conhecido por seu estilo de pilotagem agressivo e carismático.",
        link: "https://pt.wikipedia.org/wiki/Yuki_Tsunoda",
        tags: "alpha, alphatauri, alpha tauri"
    },
    {
        nome: "Daniel Ricciardo",
        equipe: "Racing Bulls",
        imagem: "images/daniel-ricciardo.jpg",
        idade: "35 anos",
        nacionalidade: "Austrália",
        descricao: "Daniel Ricciardo é um piloto australiano com vasta experiência na Fórmula 1. Conhecido por seu carisma e celebrações, ele é um dos pilotos mais populares da categoria.",
        link: "https://pt.wikipedia.org/wiki/Daniel_Ricciardo",
        tags: "alpha, alphatauri, alpha tauri"
    },
    {
        nome: "Valtteri Bottas",
        equipe: "Alfa Romeo",
        imagem: "images/valtteri-bottas.jpg",
        idade: "35 anos",
        nacionalidade: "Finlândia",
        descricao: "Valtteri Bottas é um piloto finlandês com vasta experiência na Fórmula 1. Ele foi companheiro de equipe de Lewis Hamilton na Mercedes por várias temporadas.",
        link: "https://pt.wikipedia.org/wiki/Valtteri_Bottas",
        tags: "alfaromeo"
    },
    {
        nome: "Guanyu Zhou",
        equipe: "Alfa Romeo",
        imagem: "images/zhou-guanyu.jpg",
        idade: "25 anos",
        nacionalidade: "China",
        descricao: "Guanyu Zhou é o primeiro piloto chinês a competir na Fórmula 1 de forma regular. Ele se destacou nas categorias de base antes de chegar à categoria principal.",
        link: "https://pt.wikipedia.org/wiki/Guanyu_Zhou",
        tags: "alfaromeo"
    },
    {
        nome: "Kevin Magnussen",
        equipe: "Haas",
        imagem: "images/kevin-magnussen.jpg",
        idade: "31 anos",
        nacionalidade: "Dinamarca",
        descricao: "Kevin Magnussen é um piloto dinamarquês com experiência na Fórmula 1. Ele é conhecido por sua agressividade e habilidade em ultrapassagens.",
        link: "https://pt.wikipedia.org/wiki/Kevin_Magnussen",
        tags: ""
    },
    {
        nome: "Nico Hulkenberg",
        equipe: "Haas",
        imagem: "images/nico-hulkenberg.jpg",
        idade: "37 anos",
        nacionalidade: "Alemanha",
        descricao: "Nico Hulkenberg é um piloto alemão com vasta experiência na Fórmula 1. Ele é conhecido por sua consistência e habilidade em desenvolver o carro.",
        link: "https://pt.wikipedia.org/wiki/Nico_Hulkenberg",
        tags: ""
    }
];