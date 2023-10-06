const siteAltura = document.querySelector(".site-altura");
const btn = document.querySelector("button");
const a = document.querySelector("a");
const fechar = document.getElementById("close");
const painel = document.getElementById("painel");

    
function painelResgate(){
  
if(!painel){
  alert("Não Foi Posivel Conectar-Se Ao Servidor! ERROR: 500 INTERNAL SERVER ERROR");
}
  
painel.style.display = "block";
siteAltura.style.opacity = "0.2";
siteAltura.style.cursor = "not-allowed";
btn.style.display = "none"
a.style.display = "none"
console.log("LOG> ⚠️Painel carregado!");
}  


if(!fechar) {
console.warn("Deu Pau Ao Fechar Painel De Resgate Vale")
}else{
  fechar.addEventListener("click", function(){
    painel.style.display = "none";
    siteAltura.style.opacity = "1";
    siteAltura.style.cursor = "default";
    btn.style.display = ""
    a.style.display = ""
  console.log("LOG> ⚠️painel fechado!");
});}
