const loopNetSpeed = setInterval(refreshNetSpeed, 5000);
      
        function refreshNetSpeed() {
        var userImageLink = 
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png";
            var time_start, end_time;
            var KB = "998"
            var MB = "616";
            var GB = "5";
            var Size = GB+MB+KB
            console.log("TAMANHO DO DOWLOAD: " + GB+"." + MB + "GB/SizeCalc:" + Size)
          
            var downloadImgSrc = new Image();
            downloadImgSrc.onload = function () {
                end_time = new Date().getTime();
                displaySpeed();
            };
            time_start = new Date().getTime();
            downloadImgSrc.src = userImageLink;
  
function displaySpeed() {                
  var timeseconds = (end_time - time_start)/1024
  var loadedBits = Size * 8;
  let MBps = document.getElementById("MBps");
  let GBps = document.getElementById("GBps");
  let downloadTime = document.getElementById("downloadTime");
  console.log("NETWORK/LOG> ⚠️Latencia do servidor: " + timeseconds + "s")
  let downloadtime = timeseconds*1024

if(!downloadTime) {
console.warn("Deu Pau Na Internet Do Site")
}else{
  downloadTime.innerHTML = "IMG: "+ GB+"GB/"+ downloadtime + "s "
}
  
    
  /* Converte um número em string usando toFixed(2) arredondando para 2 */
  var bps = (loadedBits / timeseconds).toFixed(2);
  var speedInKbps = (bps / 1024).toFixed(2);
  var speedInMbps = (speedInKbps / 1024).toFixed(2);
  var speedInGBps = (speedInMbps/1024).toFixed(2);
  var speedInTBps = (speedInGBps/1024).toFixed(2);
  console.info("NETWORK/LOG> ⚠️Network signal:" + bps+"Bps "+ speedInKbps+"KBps  " + speedInMbps+"MBps  " + speedInGBps+"GBps  " + speedInTBps+"TBps")
  const NetworkObj = {Bps: bps,KBps: speedInKbps,MBps: speedInMbps,GBps: speedInGBps, timeduration:timeseconds}
  const Network = JSON.stringify(NetworkObj);
  localStorage.setItem("Network", Network);  
  
  
  if(!MBps || !GBps) {
console.warn("Deu Pau No Calculo Da Internet Do Site")
}else{
  
  if(speedInKbps != "Infinity" ) {
  MBps.innerHTML = speedInMbps + " MBps"
  MBps.setAttribute('style', 'color: green')
  GBps.innerHTML = speedInGBps + " GBps"
  GBps.setAttribute('style', 'color: green')
  }else{
    if(speedInKbps === "Infinity"){
  MBps.innerHTML = "Recalculando" + " MBps"
  MBps.setAttribute('style', 'color: blue')
  GBps.innerHTML = "Recalculando" + " GBps"
  GBps.setAttribute('style', 'color: blue')}
    }
  
 if(speedInMbps < 2048.00) {
  MBps.setAttribute('style', 'color: red')}
  if(speedInGBps < 2.048) {
  GBps.setAttribute('style', 'color: red')}
}
  
}
}//Fim do loop


