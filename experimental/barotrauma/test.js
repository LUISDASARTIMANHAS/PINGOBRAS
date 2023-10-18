var canvas = document.getElementById("GameBoard");
var context = canvas.getContext("2d");
const PI = Math.PI
const meioARC = PI/180


/*
//desenhar game
let vertical = 10
let horizontal = 10
let TamLargura = 30 
let TamAltura = 25
context.fillStyle = "red"
context.fillRect(horizontal,vertical,TamLargura,TamAltura)

// salvando configs.
context.save()

//desenhar game2
vertical = 10
horizontal = 50
TamLargura = 30
TamAltura = 25
context.fillStyle = "blue"
context.fillRect(horizontal,vertical,TamLargura,TamAltura)

//restaura as configs salvas por save
horizontal = 100
context.restore()
context.fillRect(horizontal,vertical,TamLargura,TamAltura)

//iniciando um novo caminho

context.beginPath()
context.moveTo(75,250)// Ponto inicial
context.lineTo(150,50)//Percorrer trajeto com uma linha
context.lineTo(225,250)//Percorrer trajeto com uma linha
context.lineTo(50,120)//Percorrer trajeto com uma linha
context.lineTo(250,120)//Percorrer trajeto com uma linha
context.lineTo(75,250)//Percorrer trajeto com uma linha

context.lineWidth = 2
context.strokeStyle  = "red"
context.stroke()

//circunferencia e arcos
context.beginPath()
context.arc(50,50,40,90*meioARC, 270*meioARC,false)
context.fill()
context.stroke()

context.beginPath()
context.arc(50,50,40,90*meioARC, 270*meioARC,true)
context.fill()
context.stroke()


context.beginPath()
context.arc(250,50,40, 0,2*PI)
context.fill()
context.stroke() 
*/

//Função construtora
function meuCarro(cor,ano,valor){
  this.cor = cor
  this.ano = ano
  this.valor = valor
}

var carro = new meuCarro("vermelho", 2022,100000)

document.getElementById("meuCarro").innerHTML = carro.cor