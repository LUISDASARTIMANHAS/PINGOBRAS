let bypassJson2 = localStorage.getItem("bypass");
let bypassST = JSON.parse(bypassJson2)
let token = localStorage.getItem("ADMtoken");
const d3 = new Date();
let day3 = d3.getDate();
let auth3 = 1695241900+day3
let auth4 = 19264095713+day3
const adminData = document.getElementById("adminData");

if(!bypassJson2||!token||bypassJson2 == null||bypassJson2 == "null") {
const tokenSair ="desconectado";
localStorage.setItem("ADMtoken", tokenSair);
localStorage.setItem("bypass","0")
window.location.href = "#"
}

function autentication(){
if(!bypassJson2||!token||bypassJson2 == "0"||bypassJson2 == "bypass"||bypassJson2 == null) {
window.location.href = "https://pingobras.glitch.me/login"
localStorage.removeItem("bypass")
}
  
if(bypassST.bypass == auth3 || bypassST.bypass2 == auth4) {
setTimeout(alert("admin autorizado code:bypass"),7000)    
window.location.href = ("https://pingobras.glitch.me/admin")
}else{//segunda chance pro adm
if(token == "conectado") {
setTimeout(alert("Admin Autorizado Por Login Anterior, code:token"),7000)    
window.location.href = ("https://pingobras.glitch.me/admin")
}else{//adm falso
const tokenSair ="desconectado";
localStorage.setItem("ADMtoken", tokenSair);
localStorage.setItem("bypass","0")
window.location.href = "https://pingobras.glitch.me/login"
}}
  
}// fim do func autentication


if(token == "conectado") {
  let status = "Status: Conectado"
  const admstatus = document.getElementById("adminStatus");
 admstatus.innerHTML = status;
  admstatus.setAttribute('style', 'color: green')
  adminData.style.display = "block"
}else{
  const status = "Status: Não conectado"
  const admstatus = document.getElementById("adminStatus");
  admstatus.innerHTML = status;
  admstatus.setAttribute('style', 'color: red')
  adminData.style.display = "none"
}
