function pesquisa() {
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa === "") {
        section.innerHTML = "<div class='mensagem-error'><p>Nada foi encontrado!</p></div>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let encontrado = false;  // Variável para verificar se algum resultado foi encontrado

    for (let dado of dados) {  
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `<div class="item-resultado">
                            <h2>${dado.titulo}</h2>
                            <p class="descricao-meta">${dado.descricao}</p>
                            <p>${dado.data}</p>
                            <p>${dado.pais}</p>
                            <p>${dado.diretor}</p>
                            <p>${dado.categoria}</p>
                        </div>`;
            encontrado = true; // Marcamos que encontramos pelo menos um resultado
        }
    }

    // Se nenhum resultado foi encontrado, mostramos a mensagem de erro
    if (!encontrado) {
        section.innerHTML = "<div class='mensagem-error'><p>Nada foi encontrado!</p></div>";
    } else {
        section.innerHTML = resultados;
    }
}
