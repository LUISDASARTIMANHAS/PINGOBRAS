function authLDA(){
let senhaSite = "2010"
const executavel = document.getElementById("main");
const body = document.getElementById("screenLoad");
const labelLogin = document.getElementById("labelLogin");
const loadingBar = document.getElementById("loadingBar");
let executavelSty = executavel.style
let bodySty = body.style
const userinput = document.getElementById("userInput").value
  
    var iniciar2 = "no";
    var barload = document.getElementById("barlogin");
    var width = 50;
    var barspeed = 200;
    var id = setInterval(frame, barspeed);


function frame() {
      if (width >= 100) {
        clearInterval(id);
        iniciar2 = "sim";
if(senhaSite == userinput) {
      alert("Bem Vindo De Volta LUIS DAS ARTIMANHAS!!")
      bodySty.display = "none"
      executavelSty.display = ""
}else{
      labelLogin.innerHTML = "NÃO FOI POSSIVEL FAZER LOGIN⚠️"}
}else{
        width++;
        barload.style.width = width + "%";
        barload.innerHTML = "Loading... " + width + "%";}
    }//fim do auth
  
}//fim da func
