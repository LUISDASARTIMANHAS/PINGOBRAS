let TRID = Math.random().toString(26).substr(10)
let mathRandom = Math.random().toString(8).substr(2)
let tokenTR = mathRandom + mathRandom +"ValidDB:"+TRID


function authTR(){
let senhaSite = "2022"
const executavel = document.getElementById("main");
const body = document.getElementById("screenLoad");
const labelLogin = document.getElementById("labelLogin");
const loadingBar = document.getElementById("loadingBar");
let executavelSty = executavel.style
let bodySty = body.style
const userinput = document.getElementById("userInput").value
  
    var iniciar2 = "no";
    var barload = document.getElementById("barlogin");
    var width = 45;
    var barspeed = 100;
    var id = setInterval(frame, barspeed);
 

function frame() {
      if (width >= 100) {
        clearInterval(id);
        iniciar2 = "sim";
if(senhaSite == userinput) {
      alert("Bem Vindo De Volta Terceiro 02")
      bodySty.display = "none"
      executavelSty.display = ""  
sessionStorage.setItem("tokenTR:",tokenTR)
}else{
      labelLogin.innerHTML = "NÃO FOI POSSIVEL FAZER LOGIN⚠️"}
}else{
        width++;
        barload.style.width = width + "%";
        barload.innerHTML = "Loading... " + width + "%";}
    }//fim do auth
  
}//fim da func