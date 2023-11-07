const btn = document.querySelector("[dipped]");
const AreaDeTexto = document.getElementsByTagName("textarea");
const UPinput = document.querySelector("#UP1");
const UP2input = document.querySelector("#UP2");
const ClickMouse = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/click%20do%20mouse.mp3?v=1661006466474');

if(btn){
  btn.onclick = function(){
    btn.classList.toggle("dipped");}
  }


if (UPinput){
  UPinput.onclick = function(){
    UPinput.classList.toggle("dipped");};
}
if (UP2input){
  UP2input.onclick = function(){
    UP2input.classList.toggle("dipped");
  };}
  
function FullScreen(){
  document.documentElement.requestFullscreen();
}


for (let i = 0; i < AreaDeTexto.length; i++) {
  AreaDeTexto[i].style.height = AreaDeTexto[i].scrollHeight;
  AreaDeTexto[i].addEventListener("input", AoDigitar, false);
  this.value = ""
}

function AoDigitar() {
  console.warn("Redimensionamento Automático Ativado!")
  this.style.height = 0;
  this.style.height = (this.scrollHeight +20) + "px";
}