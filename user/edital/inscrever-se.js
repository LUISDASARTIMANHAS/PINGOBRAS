var dataUser = JSON.parse(localStorage.getItem("dataUser"));

// banco de dados
var userLoad = dataUser.user;
var imgLoad = dataUser.PerfilIMG;

function inscreverSe(edital) {
  const path = "inscrever-se";
  const url = "https://pingobras-sg.glitch.me/edital=" + path;
  const payloadInscrever = {
    editalDeInscricao: edital,
    usuario: userLoad,
  };
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
      Authorization: "snve072509ç$",
    },
    body: JSON.stringify(payloadInscrever),
  };

  fetch(url, options)
    .then((response) => {
      return response.text();
    })
    .then((mensagem) => {
      alert(mensagem);
      window.location.href = "/user/edital";
    })
    .catch((error) => errosInscrever(error));
}

function errosInscrever(error) {
  console.debug(error);
  alert(error);
}
