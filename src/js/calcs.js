const EMP = document.getElementById("EMP")
EMP.addEventListener("keyup", refreshCalcs);

function refreshCalcs() {
const ClickMouseCalc = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/click%20do%20mouse.mp3?v=1661006466474');
   
 try {
const EMPstyle = document.getElementById("EMP");
const EMP = document.getElementById("EMP").value;
const JurosSem = document.getElementById("jurosSem")
const JurosProxSem = document.getElementById("jurosProxSem")
const CalcTotal = document.getElementById("calcTotal")
const ProxSem = document.getElementById("proximasem")
const LOCalc = document.getElementById("loadingCalc")

if(EMP == 0){
    JurosSem.innerHTML = "Insira o valor na calculadora!"
    JurosSem.style.color = "red"
    CalcTotal.innerHTML = "Insira o valor na calculadora!"
    CalcTotal.style.color = "red"
    JurosProxSem.innerHTML = "Insira o valor na calculadora!"
    JurosProxSem.style.color = "red"
    ProxSem.innerHTML = "Insira o valor na calculadora!"
    ProxSem.style.color = "red"
    LOCalc.style.display = "none"
    EMPstyle.style.border = "2px dashed red"
  }else{
  const porcent = 0.2 
  let juros = EMP * porcent;
  let total = (Number(EMP) + Number(juros));
  let jurosNew = total * porcent
  let TotalProxSem = total + jurosNew
  
  JurosSem.innerHTML = juros
  CalcTotal.innerHTML = total
  JurosProxSem.innerHTML = jurosNew
  ProxSem.innerHTML = TotalProxSem
  JurosSem.style.color = "green"
  CalcTotal.style.color = "green"
  JurosProxSem.style.color = "green"
  ProxSem.style.color = "green"
  LOCalc.style.display = "inline"
  LOCalc.innerHTML = "inline"}
 }catch (err) {
  console.log(err);
}
  
   
  
}//final do repetidor
const INPpesquisado = document.getElementById("inputbuscar")
INPpesquisado.addEventListener("keyup", buscarDiv);

function buscarDiv() {

    var i;
    let pesquisado = document.getElementById('inputbuscar').value  
    pesquisado=pesquisado.toLowerCase();
    let items = document.getElementsByClassName('dividendos');
      
    for (i = 0; i < items.length; i++) { 
        if (!items[i].innerHTML.toLowerCase().includes(pesquisado)) {
          document.getElementById('buscadorLista').style.display="block";
              items[i].style.display="none";
          document.getElementById('buscadorLista').style.color="green";
          document.getElementById('Nenhum').style.display="block";
        }
        else {
          document.getElementById('buscadorLista').style.display="none";
            items[i].style.display="block";  
          document.getElementById('buscadorLista').style.color="red";
          document.getElementById('Nenhum').style.display="block";
        }
    }
}