const form = document.getElementById("form");
form.addEventListener("click", stopDefAction, false);

function stopDefAction(evt) {
  evt.preventDefault();
}

function restaurar() {
  const url = "https://pingobras-sg.glitch.me/restaurar=conta";
  const inpSenha = document.getElementById("senha");
  const inpEmail = document.getElementById("email");
  const payload = {
    "email": inpEmail.value
  };
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
      Authorization: "snve072509ç$",
    },
    body: JSON.stringify(payload),
  };

  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        alert("Conta restaurada com sucesso!");
      } else {
        throw new Error("Dados Incorretos! Digite o email novamente!");
        return response.text()
      }
    })
    .catch((error) => errosRestaurar(error));
}



function errosRestaurar(error) {
  console.debug(error);
  alert(error)
}