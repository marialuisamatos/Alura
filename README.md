# 🎧 Nome do Projeto - [Projeto da Imersão Spotify/Clone do Spotify]

[![Status do Projeto](https://img.shields.io/badge/Status-Concluído-green)](https://github.com/SEU_USUARIO/SEU_REPOSITORIO)
[![Tecnologias](https://img.shields.io/badge/Tecnologias-HTML%20%7C%20CSS%20%7C%20JavaScript-blue)](https://www.w3.org/)
[![Licença MIT](https://img.shields.io/badge/Licença-MIT-yellow)](./LICENSE)

## 📝 Descrição do Projeto

Este projeto é um *clone* da interface principal do Spotify, focado na navegação e na funcionalidade de busca, desenvolvido como parte da [Mencione aqui a Imersão ou Estudo, ex: Imersão Front-end da Alura].

O objetivo principal foi aplicar e consolidar conhecimentos em **HTML**, **CSS** e **JavaScript** puro, com foco em:
* Layout responsivo e estruturação.
* Manipulação do DOM.
* Simulação de consumo de dados de uma API.

## ✨ Funcionalidades

* **Interface Fiel:** Recriação da barra lateral de navegação e da área de playlists do Spotify.
* **Busca Dinâmica:** Ao digitar na barra de pesquisa, o componente de playlists é ocultado e a área de resultados de artista é exibida.
* **Consumo Simulado de API:** O JavaScript realiza uma requisição `fetch` para um endpoint local (`http://localhost:3000/artists?name_like=...`), simulando a busca por um artista.
* **Exibição de Resultados:** Atualiza dinamicamente o nome e a imagem do artista encontrado na área de resultados.

## 🚀 Tecnologias Utilizadas

* `HTML5`
* `CSS3` (incluindo Flexbox e/ou Grid para layout)
* `JavaScript (ES6+)`

### 🛠️ Pré-requisitos (Para o ambiente de desenvolvimento)

Para que a funcionalidade de busca funcione corretamente, você precisa simular a API localmente.

* [Node.js](https://nodejs.org/en/) (para usar o JSON-Server)
* [JSON-Server](https://www.npmjs.com/package/json-server) (Instalado globalmente via npm)

## ⚙️ Como Rodar Localmente

Siga estas etapas para ter uma cópia do projeto rodando em sua máquina:

### 1. Clonar o Repositório

```bash
git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
cd SEU_REPOSITORIO
