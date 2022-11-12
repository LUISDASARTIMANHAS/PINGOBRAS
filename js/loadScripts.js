let msJS = "000"
let secJS = "60"
let minJS = 2
const timeRefreshJS = minJS*secJS+msJS
const looploadScripts = setInterval(refreshloadScripts, timeRefreshJS);
const scripts = document.querySelector("scripts");


scripts.innerHTML = 
"<script src=js/main.js defer></script>"+
"<script src=js/script.js defer></script>"+
"<script src=js/STORAGE.js defer></script>"+
"<script src=js/functions.js defer></script>"+
"<script src=js/network.js defer></script>"+
"<script src=js/time.js defer></script>"+
"<script src=js/worker.js defer></script>"+
"<script src=GlobalDB.js defer></script>"+
"<script src=https://pingobras.glitch.me/cadastro/STORAGEcad.js defer></script>"+
"<script src=https://pingobras.glitch.me/js/copyright.js defer></script>"

function refreshloadScripts() {
scripts.innerHTML = 
"<script src=js/main.js defer></script>"+
"<script src=js/script.js defer></script>"+
"<script src=js/STORAGE.js defer></script>"+
"<script src=js/functions.js defer></script>"+
"<script src=js/network.js defer></script>"+
"<script src=js/time.js defer></script>"+
"<script src=js/worker.js defer></script>"+
"<script src=GlobalDB.js defer></script>"+
"<script src=https://pingobras.glitch.me/cadastro/STORAGEcad.js defer></script>"+ 
}//Fim do refresh Links
