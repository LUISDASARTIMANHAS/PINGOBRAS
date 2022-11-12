const btntema = document.getElementById('tema');
const userbg = localStorage.getItem('UserBackground');
const perfilIconLink = localStorage.getItem('UserPerfil');
const body = document.querySelector('body');
const inputColor = document.querySelector('#colorTema');
const userConta = document.getElementById("userConta");
const nomeConta = document.getElementById("nomeConta");
const senhaConta = document.getElementById("senhaConta"); 
const saldoConta = document.getElementById("header_wallet_balance"); 
const IDConta = document.getElementById("IDConta");
const Logado = JSON.parse(localStorage.getItem('userLogado'));
const perfilIcon = document.getElementById("perfilIcon");
let userLogadoImg2 = Logado.PerfilImg
const LASTDEVICES = JSON.parse(sessionStorage.getItem("LASTDEVICES"));
const labelDevices = document.getElementById("labelDevices")
const labelDevices2 = document.getElementById("labelDevices2")
const labelDevices3 = document.getElementById("labelDevices3")
const labelDevices4 = document.getElementById("labelDevices4")
const labelDevices5 = document.getElementById("labelDevices5")
let last = LASTDEVICES.length - 1
let last2 = LASTDEVICES.length - 2
let last3 = LASTDEVICES.length - 3
let last4 = LASTDEVICES.length - 4
let last5 = LASTDEVICES.length - 5



function trocarPerfilImg(){
  let linkIMGPerfil = prompt("Insira O Link Da Foto De Perfil","https://")
  localStorage.setItem( 'UserPerfil',linkIMGPerfil);
}

function sair(){
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href = 'https://pingobras.glitch.me'
  alert("Usuario Desconectado!")
}
nomeConta.innerHTML = Logado.nome
userConta.innerHTML = Logado.user
IDConta.innerHTML = localStorage.getItem('token')
senhaConta.innerHTML = Logado.senha
labelDevices.innerHTML = LASTDEVICES[last]
labelDevices2.innerHTML = LASTDEVICES[last2]
labelDevices3.innerHTML = LASTDEVICES[last3]
labelDevices4.innerHTML = LASTDEVICES[last4]
labelDevices5.innerHTML = LASTDEVICES[last5]
if(last == 5 || last > 5) {
  sessionStorage.setItem("LASTDEVICES","[]")
}



//account Setings
if(userbg == "null") {
  body.style.background = "white"
}else{
  body.style.background = userbg
  inputColor.value = userbg
}
if(perfilIconLink == "null") {
  perfilIcon.src = "https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile.png"
}
if(userLogadoImg2 == "null"||userLogadoImg2 == ""){
    perfilIcon.src = "https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile.png"
}else{
    perfilIcon.src = userLogadoImg2
}
 
//events listener
btntema.addEventListener('click', function() {
      body.style.background = inputColor.value;
      localStorage.setItem( 'UserBackground',inputColor.value);
      body.style.color = 'black';
});
