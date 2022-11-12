let senhaSiteExe = "executavel"
  const executavel = document.querySelector("#executavel");
  const body = document.querySelector("#screenLoad");
  const labelLogin = document.getElementById("labelLogin");
  const loadingBar = document.getElementById("loadingBar");
  let executavelSty = executavel.style
  let bodySty = body.style
  let userinput = prompt("Insira a Senha Para Continuar!","0000")
  
    var iniciar2 = "no";
    var barload = document.getElementById("barlogin");
    var width = 50;
    var barspeed = 200;
    var id = setInterval(frame, barspeed);


    function frame() {
      if (width >= 100) {
        clearInterval(id);
        iniciar2 = "sim";
if(senhaSiteExe == userinput) {
      alert("Bem Vindo Ao Hodt Do Item! De DIDZIN E LUIS DAS ARTIMANHAS")
      bodySty.display = "none"
      executavelSty.display = ""
    }else{
      labelLogin.innerHTML = "NÃO FOI POSSIVEL FAZER LOGIN⚠️"
    }
      }else{
        width++;
        barload.style.width = width + "%";
        barload.innerHTML = "Loading... " + width + "%";}
    }
