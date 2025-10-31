// Obtém o elemento do DOM com o id 'search-input' e o armazena na constante searchInput
const searchInput = document.getElementById('search-input');
// Obtém o elemento do DOM com o id 'result-artist' e o armazena na constante resultArtist
const resultArtist = document.getElementById("result-artist");
// Obtém o elemento do DOM com o id 'result-playlists' e o armazena na constante resultPlaylist
const resultPlaylist = document.getElementById('result-playlists');

// Define a função requestApi que faz uma requisição à API com um termo de busca
function requestApi(searchTerm) {
    // Cria a URL da requisição, incluindo o termo de busca
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    
    // Faz a requisição para a URL usando fetch
    fetch(url)
        // Converte a resposta da requisição para JSON
        .then((response) => response.json())
        // Chama a função displayResults passando o resultado da requisição
        .then((result) => displayResults(result))
}

// Define a função displayResults que exibe os resultados da busca
function displayResults(result) {
    // Adiciona a classe 'hidden' ao elemento resultPlaylist para ocultá-lo
    resultPlaylist.classList.add("hidden")
    
    // Obtém o elemento do DOM com o id 'artist-name' e o armazena na constante artistName
    const artistName = document.getElementById('artist-name');
    
    // Obtém o elemento do DOM com o id 'artist-img' e o armazena na constante artistImage
    const artistImage = document.getElementById('artist-img');

    // Itera sobre cada elemento do resultado
    result.forEach(element => {
        // Define o texto do elemento artistName como o nome do artista
        artistName.innerText = element.name;
        // Define a fonte da imagem artistImage como a URL da imagem do artista
        artistImage.src = element.urlImg;
    });

    // Remove a classe 'hidden' do elemento resultArtist para exibi-lo
    resultArtist.classList.remove('hidden');
}

// Adiciona um evento de 'input' ao documento que é disparado quando o usuário digita
document.addEventListener('input', function () {
    // Obtém o valor do input, convertendo para minúsculas
    const searchTerm = searchInput.value.toLowerCase();
    
    // Verifica se o termo de busca está vazio
    if (searchTerm === '') {
        // Adiciona a classe 'hidden' ao resultPlaylist e remove do resultArtist
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return // Sai da função se o termo de busca estiver vazio
    }
    
    // Chama a função requestApi passando o termo de busca
    requestApi(searchTerm);
})