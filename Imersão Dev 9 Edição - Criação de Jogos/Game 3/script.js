rodada = 1;
while (rodada <= 3) {
  console.log("Rodada: " + rodada);

  escolhaJogador = prompt("Nivel " + rodada + ", vidro 1, 2 ou 3? ");
  pisoQuebrado = Math.floor(Math.random() * 3) + 1;

  if(escolhaJogador == pisoQuebrado) {
    alert("O vidro quebrou, Acabou o jogo pra você!")
    rodada = 1000;
  } else {
    alert("Passou! O piso quebrado estava na ponte: " + pisoQuebrado)
  }
  
  rodada = rodada + 1;
}

if(rodada == 4){
  alert("Você venceu! Parabéns!")
}