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
        diretor: " Mike Mitchell",
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
        titulo: "Spirited Away",
        descricao: "Chihiro, uma menina de 10 anos, é levada para um mundo mágico onde seu pai e mãe são transformados em porcos. Ela precisa trabalhar em uma casa de banhos para tentar salvá-los e escapar desse mundo.",
        data: "20.07.2001",
        pais: "(Japão)",
        diretor: "Hayao Miyazaki",
        categoria: "Animação/Aventura"
    }
];