const miliseconds2 = "000"
setTimeout(mudarlink,45+miliseconds2);
setTimeout(mudarlink2,120+miliseconds2);
setTimeout(FUTLive01,45+miliseconds2);


function mudarlink() {
let labelLink = document.getElementById("ytlink1")
let preyoutube = "https://www.youtube.com/embed/"
let precontroles = "?muted=1&autoplay=1"
let id = "DIDesej4ljc"
let link = preyoutube + id + precontroles

let VIDEO = document.querySelector("#yt");
VIDEO.setAttribute('src', link);
labelLink.innerHTML = link;
};

function mudarlink2() {
let LIVE = document.querySelector("#cryptomoedas");
LIVE.setAttribute('src', "https://dlive.tv/Coincard?ref=dlive-gjqnluuvhi?autoplay=1&muted=0");
}



function FUTLive01(){
const FUTLink01 = document.getElementById("FUTLink#01")
const FUTLive01 = document.getElementById("FUTLive#01")
const dataLink = "&ussport=false&datatracking=false&gacode=UA-43334570-1&bodyclasses=performV2PlayerContainer&csspath=https://assets.cdnppb.net/static/videoplayer/v2.59.0/resources/bf/performV2&Vis3D=true&widgetvis=true&imageconfig=https://assets.cdnppb.net/static/videoplayer/v2.59.0/resources/bf/performV2/imageconfig.js&lang=pt&streamonly=true&mode=mini&height=520&defaultview=vis&used=true"
let tokenLink = "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcklkIjoiNyIsInVzZXJJZCI6IjciLCJzcG9ydGlkIjoiMSIsImdzbWlkIjoiMzI5ODk3NyIsIndiaWQiOiIwIiwicmJpZCI6IjE3MjE5NjMiLCJ1dWlkIjoiMjFjNHBtZDYxZ2txaHFvOHV4d3JrN25mdSIsImlhdCI6MTY3MDE2NjU2MCwiZXhwIjoxNjcwMTgwOTYwLCJpc3MiOiJjc2IifQ.UwvmRjFgh2OOd9Ruy_st83st6IlVhyOgYgTjCrrx0Fk"
const linkDTrasmissao = "//wab-visualisation.performgroup.com/csb/index.html?" + tokenLink + dataLink
    
  FUTLink01.placeholder = linkDTrasmissao
  FUTLive01.setAttribute('src', linkDTrasmissao)
}