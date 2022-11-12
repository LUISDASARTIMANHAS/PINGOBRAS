
const fileInput = document.querySelector("#fileInput");
const StatusUP = document.getElementById("statusUP");
const statusLoad = document.getElementById("statusLoad");
const statusServer = document.getElementById("statusServer");
const fileID = document.getElementById("fileID");
const keyLink = document.getElementById("keyLink");
const fileName = document.getElementById("fileName");
const fileSize = document.getElementById("fileSize");
const fileLink = document.getElementById("fileLink");
const fileExpire = document.getElementById("fileExpire");
const maxDownloads = document.getElementById("maxDownloads");
const fileType = document.getElementById("fileType");
const filecreated = document.getElementById("filecreated");
const filemodified = document.getElementById("filemodified");
const Llink = document.getElementById("labelLink");

const UPDBObj = localStorage.getItem("Upload")
const UPDB = JSON.parse(UPDBObj)
if(!UPDB||UPDB == "null"){
console.warn("Deu Pau Nos Dados Do Uploader Do Site!")
}else{
let sizeCalc = UPDB.size/1000  

fileSize.innerHTML = sizeCalc+"Kb"
statusLoad.innerHTML = UPDB.success
statusServer.innerHTML = UPDB.status
fileID.innerHTML = UPDB.id
keyLink.innerHTML = UPDB.key
fileName.innerHTML = UPDB.name
fileLink.innerHTML = UPDB.link
fileExpire.innerHTML = UPDB.expires
maxDownloads.innerHTML = UPDB.maxDownloads
fileType.innerHTML = UPDB.mimeType
filecreated.innerHTML = UPDB.created
filemodified.innerHTML = UPDB.modified
Llink.href = UPDB.link}


const uploadFile = file => {
  console.log("Uploading file...");
  StatusUP.innerHTML = "Carregando Arquivo..."
  const API_ENDPOINT = "https://file.io/";
  const request = new XMLHttpRequest();
  const formData = new FormData();

  request.open("POST", API_ENDPOINT, true);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
      localStorage.setItem("Upload",request.responseText)
      StatusUP.innerHTML = "Arquivo Carregado!"
      window.location.href = "/upload"}
  };
  formData.append("file", file);
  request.send(formData);
};


  
fileInput.addEventListener("change", event => {
  const files = event.target.files;
  uploadFile(files[0]);
});

function Upar() {
  try{
const uploadFile = file => {
  console.log("Uploading file...");
  StatusUP.innerHTML = "Carregando Arquivo..."
  const API_ENDPOINT = "https://file.io/";
  const request = new XMLHttpRequest();
  const formData = new FormData();

  request.open("POST", API_ENDPOINT, true);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
      localStorage.setItem("Upload",request.responseText)
      StatusUP.innerHTML = "Arquivo Carregado!"
      window.location.href = "/upload"}
  };
  formData.append("file", file);
  request.send(formData);};
    
fileInput.addEventListener("click", event => {
  const files = event.target.files;
  uploadFile(files[0]);
});

}catch (err){
  alert(err);}
}
