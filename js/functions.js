const WindowSongError1 = new Audio(
  "https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/Windows-error-song?v=1656019161212.mp3?v=1651870846885.mp3"
);
const alarm = new Audio(
  "https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/Shop empire 2 - Alarm.mp3?v=1660420687299.mp3"
);
const ClickMouseFUNCTIONS = new Audio(
  "https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/click%20do%20mouse.mp3?v=1661006466474"
);
const Subir = document.getElementById("back-to-top");
const Descer = document.getElementById("jsDescer");
let btnlistChangelogs = document.getElementById("btnlistChangelogs");
var listChangelogs = document.getElementById("listChangelogs");
const btnALL = document.querySelectorAll("button");
let RGB;

function mostrarsenha() {
  let inputSenha = document.getElementById("senha");
  ClickMouseFUNCTIONS.play();

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
    inputSenha.placeholder = "1234";
  } else {
    inputSenha.setAttribute("type", "password");
    inputSenha.placeholder = "****";
  }
}

function pageYT() {
  ClickMouseFUNCTIONS.play();
  window.location.href = "/user/youtube.com/video-player";
}
function pageLives() {
  ClickMouseFUNCTIONS.play();
  window.location.href = "/user/youtube.com/live";
}
function redirectUrl(url) {
  ClickMouseFUNCTIONS.play();
  window.location.href = url;
}

function DESLOGAR() {
  ClickMouseFUNCTIONS.play();
  alert("usuario deslogado");
  const tokenSair = "desconectado";
  localStorage.setItem("ADMtoken", tokenSair);
  alarm.play();
  const myTimeout = setTimeout(REDIRECIONAR, 15000);
  function REDIRECIONAR() {
    window.location.href = "https://pingobras.glitch.me";
  }
  localStorage.setItem("bypass", "0");
}

//Events listener
if (Subir) {
  Subir.addEventListener("click", function () {
    ClickMouseFUNCTIONS.play();
    window.scrollTo(0, 0);
    console.log("FUNCTIONS/LOG> O Usuario foi redirecionado para cima!");
  });
}
if (Descer) {
  Descer.addEventListener("click", function () {
    ClickMouseFUNCTIONS.play();
    window.scrollTo(0, 3000);
    console.log("FUNCTIONS/LOG> O Usuario foi redirecionado para baixo!");
  });
}

function Rgb() {
  if (RGB) {
    setTimeout(vermelho, 1000);
    setTimeout(laranja, 2000);
    setTimeout(amarelo, 3000);
    setTimeout(verde, 4000);
    setTimeout(azulClaro, 5000);
    setTimeout(azul, 6000);
    setTimeout(roxo, 7000);
  }
  function vermelho() {
    RGB.style.color = "red";
  }
  function laranja() {
    RGB.style.color = "orange";
  }
  function amarelo() {
    RGB.style.color = "yellow";
  }
  function verde() {
    RGB.style.color = "green";
  }
  function azulClaro() {
    RGB.style.color = "lightblue";
  }
  function azul() {
    RGB.style.color = "blue";
  }
  function roxo() {
    RGB.style.color = "purple";
    Rgb();
  }
}
