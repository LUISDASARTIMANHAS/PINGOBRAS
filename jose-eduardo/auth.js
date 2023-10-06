const conteudo = document.getElementById("main");
const userinput = prompt("Insira A Senha", "123456");
const msmError = document.getElementById("msgError");
let senha = "123456";

if (senha == userinput) {
  conteudo.hidden = false;
} else {
  msmError.innerHTML = "NÃO FOI POSSIVEL FAZER LOGIN⚠️ Senha Incorreta";
  msmError.style.display = "block";
}
