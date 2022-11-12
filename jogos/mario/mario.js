const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const pipePlant = document.querySelector(".pipe-plant");
const gameover = document.querySelector(".game-over");
const cubo = document.querySelector(".cubo");
const telaWidth = screen.availWidth;
const telaHeight = screen.availHeight;
const gameBoard = document.querySelector(".game-board");
const btnHit = document.querySelector("#btnHit");
const Labelconfigs = document.querySelector("#configsM");
const btnAutoReplay = document.querySelector("#btnRestart");
const labelTela = document.querySelector("#labelTela");
const body = document.querySelector("body");
const marioJump = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/jump%20super%20mario.mp3?v=1662590435349');
const marioGameover= new Audio("https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/Super Mario Bros. - Game Over Sound Effect.mp3?v=1662591735840");
let placarLocal = 0;
var second = 0;
const labelPlacar = document.querySelector("#placar");
const LabelHightScore = document.querySelector("#HightScore");
const runTime = document.getElementById("runTime");
const timeGame = setInterval(CalctimeGame,1000)
let HightScore = localStorage.getItem("Mario Jump HightScore");
let autoReplay = "não"


function restart() {
  autoReplay = "sim"
  btnAutoReplay.innerHTML = "Ativado!" 
}

gameBoard.style.display = "none"
labelTela.innerHTML = "largura: " + telaWidth + "X " + "altura: " + telaHeight;
function playGame(){
if(telaWidth <= 650){
  alert("A tela do usuario e de: "+ telaWidth + "pixeis sendo muito curta! Certifiqui-se que sua tela seja 650X650 pixeis! tente colocar o celular na horizontal!");
  body.style.display = "none"
}else{ 
gameBoard.style.display = "block"
Labelconfigs.style.display = "none"}
}


document.addEventListener("keydown", jump);
document.addEventListener("click", jump);

function jump() {
  mario.classList.add("jump");
  marioJump.play();
  
  setTimeout(() => {
  mario.classList.remove("jump");
  },500);
  
}

const loopPerdeu = setInterval(perdeu, 10)
function perdeu() {
  const pipePosition =  pipe.offsetLeft;
  const pipePlantPosition =  pipePlant.offsetLeft;
  const cuboPosition =  cubo.offsetLeft;
  const marioPosition =  +window.getComputedStyle(mario).bottom.replace("px", "");
  
  if(pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80 || pipePlantPosition <= 120 && pipePlantPosition > 0 && marioPosition <= 90){
    
    pipe.style.animation = "none"
    pipe.style.left = `${pipePosition}px`
    pipePlant.style.animation = "none"
    pipePlant.style.left = `${pipePlantPosition}px`
    mario.style.animation = "none"
    mario.style.bottom = `${marioPosition}px`
    cubo.style.animation = "none"
    cubo.style.left = `${cuboPosition}px`
    mario.src = "https://preview.redd.it/dz7i4gsisu721.png?auto=webp&s=dfa780e2356ebec9b84c7537a852fc1732e50aba"
    mario.style.width = "80px"
    mario.style.height = "80px"
    mario.style.marginLeft = "50px"
    gameover.classList.add("animation-game-over");
    gameover.style.display = "block";
    marioGameover.play();
    
    clearInterval(timeGame)
    clearInterval(loopPerdeu)
    setTimeout(Reload,9000)
    function Reload(){
      if(autoReplay == "sim"){
      window.location.href = "https://pingobras.glitch.me/jogos/web/mario.html"}
    }
  }else{
    if(pipePosition < "-17" && marioPosition >= 80||pipePlantPosition < "-17" && marioPosition >= 90){
    placarLocal = placarLocal + 1;
    labelPlacar.innerHTML = placarLocal;
    if(placarLocal > 45){
    pipe.style.display = "none"
    pipePlant.style.display = "block"
    gameBoard.style.backgroundImage = "url(https://i.pinimg.com/originals/a5/5c/20/a55c2095383926772effb542eb1c1451.gif)"
    console.log("Nova Fase!")}
      
    } 
  }
  
    


  
  LabelHightScore.innerHTML = HightScore
  if(placarLocal >= HightScore){
  localStorage.setItem("Mario Jump HightScore", placarLocal);}  
  
  
}


function CalctimeGame(){

second = second+1
runTime.innerHTML = second
  }

function HitBox() {
  cubo.style.border = "2px solid black"
  pipe.style.border = "2px solid black"
  pipePlant.style.border = "2px solid black"
  mario.style.border = "2px solid black"
  btnHit.innerHTML = "Ativado!"
}

/*if(placarST){
const userMario = prompt("Insira Seu Nome","LDA");
const dadosMarioObj = {nome:userMario,pontos: HightScore};
const dadosMario = JSON.stringify(dadosMarioObj);
alert(dadosMario)}*/


