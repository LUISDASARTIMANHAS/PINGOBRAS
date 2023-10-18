const codeLabel = document.getElementById("codeError");
const code = 503


if(code == 404){
  codeLabel.innerHTML = "404 NÃO_ENCONTRADO"
}
if(code == 501){
  codeLabel.innerHTML = "501 NÃO_IMPLEMENTADO"
}
if(code == 502){
  codeLabel.innerHTML = "502 PORTÃO_DE_ENTRADA_RUIM"
}
if(code == 503){
  codeLabel.innerHTML = "503 SERVIÇO_INDISPONÍVEL"
}
if(code == 504){
  codeLabel.innerHTML = "504 TEMPO_LIMITE_DO_SERVIDOR"
}
if(code == 505){
  codeLabel.innerHTML = "505 VERSÃO_HTTP_NÃO_SUPORTADA"
}