const conteudo = document.getElementById("main");
const loginArea = document.getElementById("screenLoad");
const labelLoginArea = document.getElementById("labelLoginArea");
const loadingBar = document.getElementById("loadingBar");
const conteudoSty = conteudo.style
const loginAreaSty = loginArea.style
const d = new Date();
let dia = d.getDate();
let mes = d.getMonth();
let ano = d.getFullYear();
let hora = d.getHours();
const launcher = dia+mes+ano+hora
const key = localStorage.getItem(launcher)
const launcherSenha= key * 2 * 5 / key - 7;
console.log(launcherSenha)

var iniciar2 = "no";
    var width = 50;
    var barspeed = 100;
    var id = setInterval(frame, barspeed);

function frame() {

if (width >= 100) {
clearInterval(id);
iniciar2 = "sim";
    
  
if (launcherSenha == "3") {
    loginAreaSty.display = "none"
    conteudoSty.display = ""
}else{
  labelLoginArea.innerHTML = "NÃO FOI POSSIVEL ENTRAR, ACESSO NEGADO PELO LAUNCHER⚠️"
  loadingBar.innerHTML = "CAREGADO! " + width + "%";
};
}else{
width++;
loadingBar.style.width = width + "%";
loadingBar.innerHTML = "CARREGANDO DADOS..." + width + "%";}
}