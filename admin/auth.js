//usado para bloquear as paginas somente para admins
const loopToken = setInterval(refreshDesconect, 2000);
const alarmAuto = new Audio(
  "https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/Shop empire 2 - Alarm.mp3?v=1660420687299.mp3"
);
const bypassJson = localStorage.getItem("bypass");
let bypass = JSON.parse(bypassJson);
const labelSecurity = document.getElementById("security");
const tokenR = localStorage.getItem("ADMtoken");
const site = document.querySelector(".site-altura");
const labelAlarm = document.querySelector("alert");
const d2 = new Date();
let day2 = d2.getDate();
let auth1 = 1695241900 + day2;
let auth2 = 19264095713 + day2;

function refreshDesconect() {
  if (!labelSecurity) {
    console.warn("Deu Pau Na Segurança Do Admin");
  } else {
    labelSecurity.innerHTML = "ATIVADA";
  }

  if (tokenR == "conectado") {
    console.log("AUTH/LOG>ADMIN conectado!");
  } else {
    const tokenSair = "desconectado";
    localStorage.setItem("ADMtoken", tokenSair);
    alarmAuto.play();
    alarmAuto.volume = 0.1;
    site.style.display = "none";
    labelAlarm.style.display = "block";
    localStorage.setItem("bypass", "0");

    const myTimeout = setTimeout(REDIRECIONAR, 10000);
    function REDIRECIONAR() {
      window.location.href = "https://pingobras.glitch.me/login";
    }
  }

  if (tokenR == "null") {
    alert("⚠️ADMIN SEM INDENTIFICAÇÃO!");
    const tokenSair = "desconectado";
    localStorage.setItem("ADMtoken", tokenSair);
    alarmAuto.play();
    alarmAuto.volume = 0.1;
    site.style.display = "none";
    labelAlarm.style.display = "block";
    localStorage.setItem("bypass", "0");

    const myTimeout = setTimeout(REDIRECIONAR, 10000);
    function REDIRECIONAR() {
      window.location.href = "https://pingobras.glitch.me/login";
    }
  }

  if (bypass == auth1 || bypass.bypass2 == auth2) {
    console.log("AUTH/LOG>ADMIN conectado!");
  } else {
    const tokenSair = "desconectado";
    localStorage.setItem("ADMtoken", tokenSair);
    alarmAuto.play();
    alarmAuto.volume = 0.1;
    site.style.display = "none";
    labelAlarm.style.display = "block";
    localStorage.setItem("bypass", "0");

    const myTimeout = setTimeout(REDIRECIONAR, 10000);
    function REDIRECIONAR() {
      window.location.href = "https://pingobras.glitch.me/login";
    }
  }

  if (bypass != null || bypass.bypass2 != null) {
    console.log("AUTH/LOG>ADMIN conectado!");
  } else {
    const tokenSair = "desconectado";
    localStorage.setItem("ADMtoken", tokenSair);
    alarmAuto.play();
    alarmAuto.volume = 0.1;
    site.style.display = "none";
    labelAlarm.style.display = "block";
    localStorage.setItem("bypass", "0");

    const myTimeout = setTimeout(REDIRECIONAR, 10000);
    function REDIRECIONAR() {
      window.location.href = "https://pingobras.glitch.me/login";
    }
  }
} //Fim do refresh

let labelSiteSaldoAuth = document.getElementById("siteSaldo");
if (!labelSiteSaldoAuth) {
  console.warn("Deu Pau No Dinheiro Do Site");
} else {
  let Saldo = localStorage.getItem("SITESALDO");
  labelSiteSaldoAuth.innerHTML = Saldo;
}
