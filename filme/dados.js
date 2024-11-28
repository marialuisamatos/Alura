let dados = [
    {
        titulo: "Midnight",
        descricao: "Kyung-mi, uma jovem surda, testemunha um dos ataques do serial killer Do-sik. Agora caçada pelo criminoso, ela se envolve em um perigoso jogo de gato e rato que também ameaça sua mãe.",
        data: "30.06.2021",
        pais: "(Coreia do Sul)",
        diretor: "Kang Oh Seung",
        categoria: "Suspense"
    },
    {
        titulo: "Sorria 2",
        descricao: "Após um paciente cometer um suicídio brutal em sua frente, a psiquiatra Rose é perseguida por uma entidade maligna que muda de forma. Enquanto tenta escapar desse pesadelo, Rose também precisa enfrentar seu passado conturbado para sobreviver.",
        data: "29.09.2022",
        pais: "(Americano)",
        diretor: "(Parker Finn)",
        categoria: "Terror"
    },
    {
        titulo: "O Conto das Nove Caudas",
        descricao: " Uma produtora de TV descobre um mundo sobrenatural e secreto ao se envolver com uma divindade que passou séculos em busca do amor perdido. Mitos e lendas ganham vida neste romance de fantasia estrelado por Lee Dong-wook (Guardian: The Lonely and Great God).",
        data: "07.10.2020",
        pais: "(Coreia do Sul)",
        diretor: "Kang Shin-hyo e Nam-hyung",
        categoria: "Romance, Suspense e Fantasia"
    },
    {
        titulo: "Meu Amigo Totoro",
        descricao: "Duas meninas se mudam com o pai para o interior do Japão, com o objetivo de ficar perto da mãe, que está internada em um hospital. Lá, elas viverão muitas aventuras ao lado de um simpático espírito protetor da floresta chamado Totoro, que vive em uma canforeira gigante.",
        data: "16.04.1988",
        pais: "(Japão)",
        diretor: "Hayao Miyazaki",
        categoria: "Animação, Aventura"
    },
    {
        titulo: "Homem-Aranha: Através do Aranhaverso 2",
        descricao: "Depois de se reunir com Gwen Stacy, Homem-Aranha é jogado no multiverso. Lá, o super-herói aracnídeo encontra uma numerosa equipe encarregada de proteger sua própria existência.",
        data: "01.06.2023",
        pais: "(Califórnia - EUA)",
        diretor: "Marvel Comics",
        categoria: "Comédia, Ação"
    },
    {
        titulo: "Harry Potter e a Pedra Filosofal",
        descricao: "Harry é apresentado ao mundo dos bruxos e descobre que é muito famoso por ter sobrevivido ao ataque de Voldemort. Após várias aventuras, os garotos juntos descobrem que a pedra filosofal (segundo a lenda tem o poder da imortalidade) está guardada na escola de Bruxaria.",
        data: "23.11.2001",
        pais: "(Reino Unido)",
        diretor: "Chris Columbus",
        categoria: "Comédia, Ação, Fantasia"
    },
    {
        titulo: "Ainda Estou Aqui",
        descricao: "No início da década de 1970, o Brasil enfrenta o endurecimento da ditadura militar. No Rio de Janeiro, a família Paiva - Rubens, Eunice e seus cinco filhos - vive à beira da praia em uma casa de portas abertas para os amigos. Um dia, Rubens Paiva é levado por militares à paisana e desaparece.",
        data: "07.11.2024",
        pais: "(Rio de Janeiro - BR)",
        diretor: "Walter Salles",
        categoria: "Fato"
    },
    {
        titulo: "Divertida Mente 2",
        descricao: "Com um salto temporal, Riley se encontra mais velha, passando pela tão temida adolescência. Junto com o amadurecimento, a sala de controle também está passando por uma adaptação para dar lugar a algo totalmente inesperado: novas emoções.",
        data: "20.06.2024",
        pais: "(EUA)",
        diretor: "Kelsey Mann",
        categoria: "Animação, Comédia"
    },
    {
        titulo: "Barbie",
        descricao: "Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
        data: "20.06.2023",
        pais: "(EUA)",
        diretor: "Greta Gerwig",
        categoria: "Comédia romântica, Aventura, Fantasia"
    },  
    {
        titulo: "Deadpool & Wolverine",
        descricao: "Wolverine está se recuperando quando cruza seu caminho com Deadpool. Juntos, eles formam uma equipe e enfrentam um inimigo em comum.",
        data: "25.06.2024",
        pais: "(EUA)",
        diretor: "Shawn Levy",
        categoria: "Comédia, Ação"
    },
    {
        titulo: "Kung Fu Panda 4",
        descricao: "DUma poderosa feiticeira que muda de forma coloca os olhos no Cajado da Sabedoria. Po de repente percebe que precisa de ajuda e logo descobre que heróis podem ser encontrados nos lugares mais inesperados.",
        data: " 07.03.2024",
        pais: "(EUA)",
        diretor: "Mike Mitchell",
        categoria: "Comédia, Aventura"
    },
    {
        titulo: "Inception",
        descricao: "Dom Cobb é um ladrão especializado em extrair segredos valiosos do inconsciente das pessoas enquanto elas sonham. Ele recebe uma proposta para implantar uma ideia na mente de um alvo, o que se torna uma missão extremamente arriscada.",
        data: "16.07.2010",
        pais: "(EUA)",
        diretor: "Christopher Nolan",
        categoria: "Ficção Científica"
    },
    {
        titulo: "The Dark Knight",
        descricao: "O Cavaleiro das Trevas enfrenta o coringa, um criminoso imprevisível que coloca Gotham em caos. Batman deve tomar decisões difíceis para salvar a cidade e proteger seus entes queridos.",
        data: "18.07.2008",
        pais: "(EUA)",
        diretor: "Christopher Nolan",
        categoria: "Ação"
    },
    {
        titulo: "Parasite",
        descricao: "A história de uma família pobre que se infiltra na vida de uma família rica. À medida que se tornam mais envolvidos, segredos começam a ser revelados, levando a uma série de acontecimentos inesperados.",
        data: "30.05.2019",
        pais: "(Coreia do Sul)",
        diretor: "Bong Joon-ho",
        categoria: "Drama"
    },
    {
        titulo: "The Matrix",
        descricao: "Neo, um hacker, descobre que a realidade que conhece é uma simulação criada por máquinas. Ele se junta a um grupo rebelde para tentar libertar a humanidade.",
        data: "31.03.1999",
        pais: "(EUA)",
        diretor: "Lana e Lilly Wachowski",
        categoria: "Ficção Científica"
    },
    {
        titulo: "Shutter Island",
        descricao: "Um detetive é enviado para investigar o desaparecimento de uma prisioneira em um hospital psiquiátrico isolado. À medida que ele investiga, começa a questionar a própria realidade.",
        data: "19.02.2010",
        pais: "(EUA)",
        diretor: "Martin Scorsese",
        categoria: "Mistério"
    },
    {
        titulo: "Amélie",
        descricao: "Amélie, uma jovem parisiense, decide mudar a vida das pessoas ao seu redor de maneira sutil, enquanto lida com seus próprios sentimentos e a busca por sua identidade.",
        data: "25.04.2001",
        pais: "(França)",
        diretor: "Jean-Pierre Jeunet",
        categoria: "Comédia/Drama"
    },
    {
        titulo: "Cidade de Deus",
        descricao: "Na favela Cidade de Deus no Rio de Janeiro, a história de dois jovens segue caminhos distintos: um se torna fotógrafo, enquanto o outro se envolve no crime organizado.",
        data: "30.08.2002",
        pais: "(Brasil)",
        diretor: "Fernando Meirelles, Kátia Lund",
        categoria: "Drama/Crime"
    },
    {
        titulo: "Life is Beautiful",
        descricao: "Durante a Segunda Guerra Mundial, Guido, um judeu italiano, usa sua imaginação e humor para proteger seu filho dos horrores do campo de concentração.",
        data: "20.12.1997",
        pais: "(Itália)",
        diretor: "Roberto Benigni",
        categoria: "Drama/Comédia"
    },
    {
        titulo: "Run Lola Run",
        descricao: "Lola tem 20 minutos para salvar seu namorado, após ele perder uma quantia grande de dinheiro. O filme acompanha três possíveis cenários de como isso pode acontecer.",
        data: "27.08.1998",
        pais: "(Alemanha)",
        diretor: "Tom Tykwer",
        categoria: "Ação"
    },
    {
        titulo: "A viagem de Chihiro",
        descricao: "Chihiro, uma menina de 10 anos, é levada para um mundo mágico onde seu pai e mãe são transformados em porcos. Ela precisa trabalhar em uma casa de banhos para tentar salvá-los e escapar desse mundo.",
        data: "20.07.2001",
        pais: "(Japão)",
        diretor: "Hayao Miyazaki",
        categoria: "Animação/Aventura"
    },
    {
        titulo: "Coraline e o Mundo Secreto",
        descricao: "Enquanto explora sua nova casa à noite, a pequena Coraline descobre uma porta secreta que contém um mundo parecido com o dela, porém melhor em muitas maneiras. Todos têm botões no lugar dos olhos, os pais são carinhosos e os sonhos de Coraline viram realidade por lá. Ela se encanta com essa descoberta, mas logo percebe que segredos estranhos estão em ação: uma outra mãe e o resto de sua família tentam mantê-la eternamente nesse mundo paralelo.",
        data: "13.02.2009",
        pais: "(Reino Unido)",
        diretor: "Henry Selick",
        categoria: "Fantasia, Horror"  
    },
    {
        titulo: "Ai que Vida!",
        descricao: "Cleonice decide se candidatar à prefeitura enquanto seu filho, Valdir, cumpre pena em uma instituição filantrópica e acaba se apaixonando por moça que está para casar. Na fictícia Poço Fundo, política e afeto se misturam em saga contra a corrupção.",
        data: "14.09.2008",
        pais: "(Brasil)",
        diretor: "Cícero Filho",
        categoria: "Comédia, Romance, Drama"
    },
    {
        titulo: "BTS Bring Of The Seol: The Movie",
        descricao: "A produção sul-coreana exibe ainda performances ao vivo do grupo nos palcos e, no final, mostra os integrantes em um telhado de Paris, durante uma conversa aberta sobre a turnê. Considerado um enorme sucesso de bilheteria, o longa teve um desempenho positivo.",
        data: "07.09.2019",
        pais: "(Coreia do Sul)",
        diretor: "Cícero Filho",
        categoria: "Comédia, "
    },
    {
        titulo: "BTS Break The Silencce: The Movie",
        descricao: "Uma visita ao mundo do BTS fora do palco, com conversas intimistas do grupo acompanhadas de apresentações espetaculares nos shows da turnê, esse é um evento cinematográfico imperdível. A jornada do BTS continua!",
        data: " ",
        pais: "(Brasil)",
        diretor: "Coreia do Sul",
        categoria: "Comédia, "
    },
    {
        titulo: "Robô Selvagem",
        descricao: "The Wild Robot é um filme de animação americano de drama e ficção científica baseado na série de livros de mesmo nome de Peter Brown, produzido pela DreamWorks Animation e distribuído pela Universal Pictures.",
        data: "10.10.2024",
        pais: "(Americano)",
        diretor: " Chris Sanders",
        categoria: "Comédia, Animação"
    },
    {
        titulo: "Hotel Transilvânia 3: Férias Monstruosas",
        descricao: "A família faz um cruzeiro para que Drácula possa sair de férias e abandonar por uns dias seu trabalho no Hotel Transilvânia. Tudo vai bem até que Mavis percebe que Drácula se apaixonou por uma humana que pode colocá-los em perigo.",
        data: "12.06.2018",
        pais: "(Estadunidense)",
        diretor: "Genndy Tartakovsky",
        categoria: "Comédia, Romance, Animação"
    },
    {
        titulo: "O Reino dos Gatos",
        descricao: "Haru salva um gato que estava prestes a ser atropelado por um caminhão e descobre que ele é, na verdade, um príncipe. Por gratidão o Rei dos Gatos a pede em casamento, e a menina é levada para o Reino dos Gatos. Agora, ela quer sua liberdade.",
        data: "13.02.2004",
        pais: "(Japão)",
        diretor: "Hiroyuki Morita",
        categoria: "Comédia, Romance, Animação"
    },
    {
        titulo: "O Castelo no Céu",
        descricao: "Sheeta, uma jovem órfã que possui um colar misterioso se une ao mineiro Pazu para procurar uma lendária cidade flutuante. Mas a dupla é perseguida por gananciosos piratas aéreos.",
        data: "14.07.1989",
        pais: "(Japão)",
        diretor: "Hayao Miyazaki",
        categoria: "Comédia, Romance, Animação"
    },
    {
        titulo: "O Castelo Animado",
        descricao: "Uma bruxa lança uma terrível maldição sobre a jovem Sophie transformando-a em uma velha. Desesperada, ela embarca em uma odisseia em busca do mago Howl, um misterioso feiticeiro que pode ajudá-la a reverter o feitiço.",
        data: "15.07.2005",
        pais: "(Japão)",
        diretor: "Hayao Miyazaki",
        categoria: "Comédia, Romance, Animação"
    },
    {
        titulo: "O Menino e a Garça",
        descricao: "Mahito, um menino de 12 anos, luta para se estabelecer em uma nova cidade após a morte de sua mãe. Quando uma garça falante conta para Mahito que sua mãe ainda está viva, ele entra em uma torre abandonada em busca dela, o que o leva para outro mundo.",
        data: "14.07.2023",
        pais: "(Japão)",
        diretor: "Hayao Miyazaki",
        categoria: "Aventura, Animação"
    },
    {
        titulo: "A Garota do Século 20",
        descricao: "Em 1999, uma adolescente monitora atentamente o garoto pelo qual a melhor amiga está apaixonada. Tudo vai bem até que um outro amor começa a dar as caras.",
        data: "06.10.2022",
        pais: "(Coreia do Sul)",
        diretor: "Bang Woo-ri",
        categoria: "Cómedia, Romance, Drama"
    }
];
