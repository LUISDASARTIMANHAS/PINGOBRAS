const fileInput = document.getElementById("fileInput");
const StatusUP = document.getElementById("statusUP");
let formData = new FormData();

fileInput.addEventListener("change", (event) => {
  atualizarFiles(event);
  uploadFile(formData);
});

function atualizarFiles(event) {
  const files = event.target.files;
  formData = new FormData();
  formData.append("file", files[0]);
  StatusUP.innerHTML = "Carregando Arquivo...";
}

function uploadFile(formData) {
  const protocolPost = "https://";
  const urlPost = protocolPost + "file.io"; // URL de destino

  const requestOptionsPost = {
    method: "POST",
    body: formData,
  };

  fetch(urlPost, requestOptionsPost)
    .then((response) => response.json())
    .then((data) => resposta(data))
    .catch((error) => erros(error));
}

function resposta(data) {
  if(data.success) {
    const dados = JSON.stringify(data)
    console.log(data);

    localStorage.setItem("Upload", dados);
    StatusUP.innerHTML = "Arquivo Carregado!";
    window.location.href = "/upload";
  } else {
    console.log(data.error);
    alert("Ocorreu um erro ao carregar o arquivo: \n" +data.error)
  }
}

function erros(error) {
  console.debug(error);
}
