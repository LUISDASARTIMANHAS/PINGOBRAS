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
  recuperarSenhaMessage("Recuperação de Senha para o Email: " + censurarEmail(inpEmail.value))
  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        recuperarSenhaMessage("Usuario e Senha alterados com sucesso!, verifique seu email ou caixa de spam.")
        alert("Usuario e Senha alterados com sucesso!, verifique seu email ou caixa de spam.");
        window.location.href = "/login";
      } else {
        recuperarSenhaMessage("Dados Incorretos! Digite o email novamente!")
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

function recuperarSenhaMessage(msg) {
  const url = "https://pingobras-sg.glitch.me/api/pingobras/mensagem";
  const payload = {
    titulo: "RECUPERAR-SENHA",
    mensagem: msg,
  };
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
      Authorization: "APIKey20231603",
    },
    body: JSON.stringify(payload),
  };

  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.text();
      }
    })
    .then((data) => {
      console.log("DATA RESPONSE: ");
      console.log(data);
    })
    .catch((error) => console.debug(error));
}

function censurarEmail(email) {
    if (email.length >= 5) {
        // Mantém os primeiros cinco caracteres e substitui o restante por asteriscos
        const censurado = email.slice(0, 5) + '*'.repeat(email.length - 5);
        return censurado;
    } else {
        // Se o email for menor que 5 caracteres, não faz nada
        return email;
    }
}