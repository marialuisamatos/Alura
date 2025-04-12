personagem = ["", "", ""]

viloes = ["", "", ""]

forcaPersonagem = 0
forcaViloes = 0
alert("O array Personagem contém: " + personagem)
for(let i=0; i<3; i++){
  escolhaPersonagem = prompt("Digite o nome do seu personagem" + (i + 1))
  personagem[i] = escolhaPersonagem
  
  //calcular força dos personagem e depois somar para saber a forca do time
  forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1
  // forcaPersonagem += Math.floor(Math.random() * 10) + 1 //maneira mais avançada de fazer a mesma coisa
}
console.log("Agora, o array personagem contém: " + personagem)
console.log("Inicio Viloes: " + viloes)
for(let i=0; i<3; i++){
  indiceAleatorio = Math.floor(Math.random() * 5)
  viloesPossiveis = ["Nazare", "Odete", "Flora", "Carminha", 
"Laura"]
  viloes[i] = viloesPossiveis[indiceAleatorio]
  //calcular força dos personagem e depois somar para saber a forca do time do computador
  forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1
}
console.log("Final Viloes: " + viloes)

//Comparar os dois times para saber quem venceu

if (forcaPersonagem > forcaViloes){
  alert("Seu time GANHOU na disputa do cabo de guerra! A força do seu time foi: " + forcaPersonagem)
} 
else {
  if(forcaPersonagem < forcaViloes){
      alert("Seu time PERDEU na disputa do cabo de guerra! A força do time do computador foi: " + forcaViloes)
  } 
  else {
     alert("EMPATE! Ambos os times tem a mesma força!")
  }
}