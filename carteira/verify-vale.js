const loopVale = setInterval(refreshVerifyVale, 1000);

function refreshVerifyVale() {
const ClickMouseCalc = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/click%20do%20mouse.mp3?v=1661006466474');
const btnResgatarVale = document.getElementById("btn-resgatar-vale");
const span = document.getElementById("spanVale");
const disabled = document.querySelector("[disabled]")
let btnRVStyle = btnResgatarVale.style;  
  
  
 try {
const code = document.getElementById("presente-code");
const msgError = document.getElementById("msgError");
const btnAtivar = document.getElementById("btnAtivar");
let valeCode = "1depresente"

if(!disabled){

}else{
  btnRVStyle.cursor="not-allowed"
  btnRVStyle.background="red"
  span.innerHTML="Indisponivel"
}

if(code.value == valeCode){
msgError.style.display="none"  
btnAtivar.style.display="block"  
  
}else{
btnAtivar.style.display="none"
msgError.style.display="block"  
msgError.innerHTML = "O CODIGO NÃO E VALIDO!"
}


 }catch (err) {
  console.log(err);
  btnRVStyle.cursor="not-allowed"
  btnRVStyle.background="red"
  span.innerHTML="Indisponivel"
}
  
   
  
}//final do repetidor