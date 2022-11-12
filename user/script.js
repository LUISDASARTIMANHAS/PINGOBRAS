const DBuserbg = localStorage.getItem('UserBackground')
let body2 = document.querySelector('body');
let saldoContamain = document.getElementById("header_wallet_balance") 
const DBperfilIconLink = localStorage.getItem('UserPerfil')
let perfilIcon2 = document.getElementById("perfilIcon")
const userLogado = JSON.parse(localStorage.getItem('userLogado')) 
let userLogadoImg = userLogado.PerfilImg
let labellogado = document.querySelector('#logado')

let NewDeviceUser = navigator.userAgent + " Utilizando: "+ navigator.appName +"." + navigator.appCodeName
    var STDEVICE2 = [];
    STDEVICE2 = JSON.parse(sessionStorage.getItem("LASTDEVICES")) || [];
    STDEVICE2.push(NewDeviceUser);
    sessionStorage.setItem('LASTDEVICES', JSON.stringify(STDEVICE2));



saldoContamain.innerHTML = "R$:" + userLogado.saldo+",00"
if(!labellogado){
  console.warn("Deu Pau No Bem vindo Do Site")
}else{
labellogado.innerHTML = userLogado.user + " Bem Vindo de Volta!"}

function sair(){
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href = 'https://pingobras.glitch.me'
}

//account Setings
if(DBuserbg == "null") {
  body2.style.background = "white"
}else{
  body2.style.background = DBuserbg
}
if(DBperfilIconLink == "null") {
  perfilIcon2.src = "https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile.png"
}
if(userLogadoImg == "null"||userLogadoImg == ""){
    perfilIcon2.src = "https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile.png"
}else{
    perfilIcon2.src = userLogadoImg
}
