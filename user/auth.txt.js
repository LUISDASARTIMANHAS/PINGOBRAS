const loopToken = setInterval(refreshDesconect, 2000);

function refreshDesconect() {
let token = localStorage.getItem('token')
let labelAlarm = document.querySelector("alert");
let head = document.querySelector("nav") 


if(token == "null"){
let site = document.querySelector(".site-altura") 

const alarmAuto = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/Shop empire 2 - Alarm.mp3?v=1660420687299.mp3');
alert('Você precisa estar logado para acessar essa página')
site.style.display = "none"
labelAlarm.style.display = "block";
alarmAuto.play();
  
const myTimeout = setTimeout(REDIRECIONAR, 10000);
function REDIRECIONAR() {window.location.href = "/login"}
head.style.display = "none"
}else{
 localStorage.setItem( 'token',token);
}
  
  
}//Fim do Refresh desconectar
