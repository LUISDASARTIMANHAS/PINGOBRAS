
let body = document.querySelector('body');
let userConta = document.getElementById("userConta") 
let nomeConta = document.getElementById("nomeConta")
let senhaConta = document.getElementById("senhaConta") 
let saldoConta = document.getElementById("saldoConta") 
let IDConta = document.getElementById("IDConta")
let Logado = JSON.parse(localStorage.getItem('userLogado'))

nomeConta.innerHTML = Logado.nome
userConta.innerHTML = Logado.user
senhaConta.innerHTML = Logado.senha
saldoConta.innerHTML = Logado.saldo
