const LabelNumTSort = document.getElementById("LabelNumTSort")
const LabelNumSort = document.getElementById("LabelNumSort")
const LabelQNum = document.getElementById("LQuantNumCart")
const alertBolls = document.getElementById("alertBolls")
const coinMario = new Audio("https://cdn.glitch.global/fc6a494d-99b5-4c04-ab55-4c0f07bb3056/Efeito sonoro da moeda do Mario.mp3?v=1668288962466")
let sortNum = LabelNumSort.innerHTML
var numAleatorio
var QBolas = 0

setInterval(Sorteador,2000)  
function Sorteador(){
  if(QBolas == 50){
      console.log(QBolas)
      clearInterval(Sorteador)
      alertBolls.innerHTML = "Chega De Sortear Bolas!"
}else{
  var divs = document.querySelectorAll('span'), i;
  numAleatorio = Math.floor(Math.random() * 90)
  QBolas = QBolas+1
  LabelNumTSort.innerHTML = QBolas+"/50"
  LabelNumSort.innerHTML = numAleatorio
  LabelQNum.innerHTML =  divs.length
    
    for (i = 0; i < divs.length; ++i) {
      if(divs[i].innerText == numAleatorio){
      	divs[i].style.color = "red";
        coinMario.play()}	
    }}
        
}//fim do sorteador
