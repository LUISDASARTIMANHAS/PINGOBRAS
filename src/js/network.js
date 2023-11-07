const MBpsLabel = document.getElementById("MBps");
const GBpsLabel = document.getElementById("GBps");
const downloadTime = document.getElementById("downloadTime");
const loopNetSpeed = setInterval(refreshNetSpeed, 5000);
const userImageLink =
  "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png";
const imgSizeBytes = "000";
const imgSizeKBytes = "960" + imgSizeBytes;
const imgSizeMBytes = "400" + imgSizeKBytes;
const imgSize = imgSizeMBytes;

function refreshNetSpeed() {
  const startTime = new Date().getTime();
  const newImage = new Image();

  newImage.src = userImageLink;
  newImage.onload = calcNetwork(startTime);
}

function calcNetwork(startTime) {
  const endTime = new Date().getTime();
  const timeSeconds = endTime - startTime;
  const bytesPs = (imgSize * timeSeconds) / 1024;
  const bitsPs = bytesPs * 8;
  const KBps = (bitsPs / 1000).toFixed(2);
  const MBps = (KBps / 1000).toFixed(2);
  const GBps = (MBps / 1000).toFixed(2);

  if (downloadTime && MBpsLabel && GBpsLabel) {
    if (MBps == 0) {
      MBpsLabel.innerText = "Recalculando...";
      GBpsLabel.innerText ="Recalculando...";
      downloadTime.innerText ="Recalculando.../s";
      MBpsLabel.style.color = "blue"
      GBpsLabel.style.color = "blue"
    } else {
      MBpsLabel.innerText = MBps + "MBps";
      GBpsLabel.innerText = GBps + "GBps";
      downloadTime.innerText = timeSeconds + "/s";
      if(MBps >= 5){  
      MBpsLabel.style.color = "green"
      }
      if(MBps >= 5){
      GBpsLabel.style.color = "green"  
      }
      MBpsLabel.style.color = "red"
      GBpsLabel.style.color = "red" 
    }
  }
  saveDataNetwork(bitsPs, KBps, MBps, GBps, timeSeconds, imgSize);
}

function saveDataNetwork(Bps, KBps, MBps, GBps, timeSeconds, tam) {
  const NetworkObj = {
    Bps: Bps,
    KBps: KBps,
    MBps: MBps,
    GBps: GBps,
    timeduration: timeSeconds,
    size: tam,
  };
  console.log(NetworkObj);
  const Network = JSON.stringify(NetworkObj);
  localStorage.setItem("Network", Network);
}
