
let nome = document.querySelector('#nome')
let usuario = document.querySelector('#usuario')
let senha = document.querySelector('#senha')
let confirmSenha = document.querySelector('#confirmSenha')

let labelNome = document.querySelector('#labelNome')
let labelUsuario = document.querySelector('#labelUsuario')
let labelSenha = document.querySelector('#labelSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')

let validNome = false
let validUsuario = false
let validSenha = false
let validConfirmSenha = false
localStorage.setItem('validNome','false');
localStorage.setItem('validUsuario','false');
localStorage.setItem('validSenha','false');
localStorage.setItem('validConfirmSenha','false');

let btnMostrar = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')
let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')
  

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    localStorage.setItem('validNome',false);
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    localStorage.setItem('validNome',true);}
})

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    localStorage.setItem('validUsuario',false);
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    localStorage.setItem('validUsuario',true);}
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    localStorage.setItem('validSenha',false);
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    localStorage.setItem('validSenha',true);}
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    localStorage.setItem('validConfirmSenha',false);
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
    localStorage.setItem('validConfirmSenha',true); }
})  


//cadastramento
function cadastrar(){
  let DBvalidNome = localStorage.getItem ('validNome')
  let DBvalidUsuario = localStorage.getItem ('validUsuario')
  let DBvalidSenha = localStorage.getItem ('validSenha')
  let DBvalidConfirmSenha = localStorage.getItem ('validConfirmSenha')
  
  
  if(DBvalidNome == "true" & DBvalidUsuario == "true" & DBvalidSenha == "true" & DBvalidConfirmSenha == "true") {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {nomeCad: nome.value, userCad: usuario.value, senhaCad: senha.value, saldoCad: 1.00,}
    )
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = 'Nenhum erro encontrado'
    setTimeout(()=>{window.location.href = 'https://pingobras.glitch.me/login'}, 7000)

  }else{
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'

    msgSuccess.innerHTML = 'Nenhum erro encontrado'
    msgSuccess.setAttribute('style', 'display: none')}
  
}




//mostrar senhas
btnMostrar.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
    inputSenha.placeholder = "123456"
  }else{
    inputSenha.setAttribute('type', 'password')
    inputSenha.placeholder = "******"}
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
    inputConfirmSenha.placeholder = "123456"
  }else{
    inputConfirmSenha.setAttribute('type', 'password')
    inputConfirmSenha.placeholder = "******"}
})
