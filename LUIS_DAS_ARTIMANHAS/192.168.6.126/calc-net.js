setInterval(NetSpeed,1000)    
    
function NetSpeed(){
  var userImageLink = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png";
  var time_start, end_time;
  const BPSL= document.getElementById("BPSLDA");
  const KBPSL = document.getElementById("KBPSLDA");
  const MBPSL = document.getElementById("MBPSLDA");
  const GBPSL = document.getElementById("GBPSLDA");
  
  // The size in bytes 
  var downloadSize = 5616998;
  var downloadImgSrc = new Image();
  
  downloadImgSrc.onload = function () {
    end_time = new Date().getTime();
    displaySpeed();};
  time_start = new Date().getTime();
  downloadImgSrc.src = userImageLink;
  
  function displaySpeed() {
    var timeDuration = (end_time - time_start) / 1000;
    var loadedBits = downloadSize * 8;
    
    /* Converts a number into string using toFixed(2) rounding to 2 */
    var bps = (loadedBits / timeDuration).toFixed(2);
    var speedInKbps = (bps / 1024).toFixed(2);
    var speedInMbps = (speedInKbps / 1024).toFixed(2);
    var speedInGbps = (speedInMbps / 1024).toFixed(2);
    
    if(bps == "Infinity"||speedInKbps == "Infinity"||speedInMbps == "Infinity"){
    BPSL.innerHTML = "SEM USO DA INTERNET"
    KBPSL.innerHTML = "SEM USO DA INTERNET"
    MBPSL.innerHTML = "SEM USO DA INTERNET"  
    GBPSL.innerHTML = "SEM USO DA INTERNET"
    }else{
    BPSL.innerHTML = bps
    KBPSL.innerHTML = speedInKbps
    MBPSL.innerHTML = speedInMbps
    GBPSL.innerHTML = speedInGbps}
    
  }
}