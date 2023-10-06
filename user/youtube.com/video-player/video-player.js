const INPL = document.getElementById("INPL")
const VIDEOPLAYERLINK = document.getElementById("VIDEOPLAYERLINK")
const VIDEOPLAYER = document.getElementById("VIDEOPLAYER")
const title = document.getElementById("title")
INPL.addEventListener("keyup", searchVideo);

    
function searchVideo(){
//refresh values
let LINK = INPL.value
const autoplay = document.getElementById("autoplay").checked
const LINKPADRAO = "https://www.youtube.com/embed/OiL1kFo4C8Y"
const LINKNovoAUTO = LINK.replace("watch?v=", "embed/")+"?autoplay=1"
const LINKNovoAUTO2 = LINK.replace("youtu.be/", "youtube.com/embed/")+"?autoplay=1"
const LINKNovo2 = LINK.replace("youtu.be/", "youtube.com/embed/")
let matchLink2 = LINK.match("youtu.be")
//end refresh values  


if(matchLink2 == null){
  
  
if(autoplay == false){//verificando se o autopay esta marcado!
var LINKNovo = LINK.replace("watch?v=", "embed/")

if(LINK == ""||LINK == " "){//Caso o usuario nâo tenha defiido link!
 console.error("Video Não Indentificado!")
 VIDEOPLAYERLINK.placeholder = LINKPADRAO;
 VIDEOPLAYER.setAttribute('src', LINKPADRAO);
 title.innerHTML = "PINGOBRAS EMBUTIR VIDEO?NDA"
}else{//Carregar o link definido por usuario!
  VIDEOPLAYERLINK.placeholder = LINKNovo
  VIDEOPLAYER.setAttribute('src', LINKNovo)
  title.innerHTML = "PINGOBRAS?" + LINKNovo}
}else{//caso o usuario tenha marcado para iniciar automaticamente!
  VIDEOPLAYERLINK.placeholder = LINKNovoAUTO
  VIDEOPLAYER.setAttribute('src', LINKNovoAUTO)
  title.innerHTML = "PINGOBRAS?" + LINKNovoAUTO}
  
  
}else{
if(autoplay == false){//verificando se o autopay esta marcado!

if(LINK == ""||LINK == " "){//Caso o usuario nâo tenha defiido link!
 console.error("Video Não Indentificado!")
 VIDEOPLAYERLINK.placeholder = LINKPADRAO;
 VIDEOPLAYER.setAttribute('src', LINKPADRAO);
 title.innerHTML = "PINGOBRAS EMBUTIR VIDEO?NDA"
}else{
 VIDEOPLAYERLINK.placeholder = LINKNovo2
  VIDEOPLAYER.setAttribute('src', LINKNovo2)
  title.innerHTML = "PINGOBRAS?" + LINKNovo2}
  
}else{//caso o usuario tenha marcado para iniciar automaticamente!
  VIDEOPLAYERLINK.placeholder = LINKNovoAUTO2
  VIDEOPLAYER.setAttribute('src', LINKNovoAUTO2)
  title.innerHTML = "PINGOBRAS?" + LINKNovoAUTO2}//fim do verificar autoplay
  
}//Fim Do verificar dominio novo
}//Fim Da Func