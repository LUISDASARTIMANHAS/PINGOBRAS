const form = document.getElementById("form");
const path = "recuperar=senha";
const url = "https://pingobras-sg.glitch.me/" + path;

form.addEventListener("click", stopDefAction, false);

function stopDefAction(evt) {
  evt.preventDefault();
}

function recuperar() {
  const inpSenha = document.getElementById("senha");
  const inpEmail = document.getElementById("email");
  const payloadRecuperar = {
    "email": inpEmail.value,
    "senha": inpSenha.value
  };
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
      Authorization: "snve072509ç$",
    },
    body: JSON.stringify(payloadRecuperar),
  };

  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        alert("Usuario e Senha alterados com sucesso!, verifique seu email ou caixa de spam.");
        window.location.href = "/login";
      } else {
        throw new Error("Dados Incorretos! Digite o email novamente!");
        return response.text()
      }
    })
    .catch((error) => errosRecuperar(error));
}



function errosRecuperar(error) {
  console.debug(error);
  alert(error)
}