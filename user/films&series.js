const miliseconds2 = "000"
setTimeout(mudarlink,45+miliseconds2);
setTimeout(mudarlink2,120+miliseconds2);

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
