idade = prompt("Quantos anos você tem?");
if (idade < 18) {
  alert("Você NÃO pode jogar!");
}

//alert("Vamos jogar!")

if ((idade) => 18) {
  escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesooura?");
  escolhaComptador = Math.floor(Math.random() * 3) + 1;

  if (escolhaJogador == escolhaComptador) {
    alert("Empate!");
  }

  if (escolhaJogador == 1) {
    if (escolhaComptador == 2) {
      alert("Computador Venceu, escolheu papel!");
    }
    if (escolhaComptador == 3) {
      alert("Jogador ganhou, computador escolheu tesoura");
    }
  }

  if (escolhaJogador == 2) {
    if (escolhaComputador == 1) {
      alert("Jogador venceu, Computador escolheu pedra!");
    }
    if (escolhaComputador == 3) {
      alert("Computador venceu, escolheu tesoura!");
    }
  }

  if (escolhaJogador == 3) {
    if (escolhaComputador == 1) {
      alert("Computador venceu, escolheu pedra!");
    }
    if (escolhaComputador == 2) {
      alert("Jogador venceu, computador escolheu papel!");
    }
  }

  alert("A escolha do computador foi: " + escolhaJogador);
}