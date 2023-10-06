var looptime = setInterval(timeRefresh2, 1000);
const msgErrorHour = document.querySelector(".msg-error-hour");
const urlBase = "https://pingobras.glitch.me/"
const conteudo = document.getElementById("conteudo");

let secondsplayer = "58";
let setminutesplayer = "30";
let minutesplayer = setminutesplayer < 10 ? "0" + setminutesplayer : setminutesplayer;
let sethoursplayer = "23";
const horaselect = sethoursplayer + minutesplayer;


function timeRefresh2() {
  const time = new Date();

  const Gethours = time.getHours();
  let hours = Gethours < 10 ? "0" + Gethours : Gethours;
  const Getminutes = time.getMinutes();
  let minutes = Getminutes < 10 ? "0" + Getminutes : Getminutes;
  const Getseconds = time.getSeconds();
  let seconds = Getseconds < 10 ? "0" + Getseconds : Getseconds;
  
  let horariojs = hours + "" + minutes;
  
  console.log("TIME/LOG>" + horariojs + ">" + horaselect);
  if(msgErrorHour){
  if (horariojs > horaselect) {
    if(urlBase != document.URL){
      window.location.href = urlBase
    }
    conteudo.style.display = "none";
    msgErrorHour.style.display = "block";

  } else {
    conteudo.style.display = "";
    msgErrorHour.style.display = "none";
  }
}
}
