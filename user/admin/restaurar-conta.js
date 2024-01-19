const form = document.getElementById("form");
form.addEventListener("click", stopDefAction, false);

function stopDefAction(evt) {
  evt.preventDefault();
}

function restaurar() {
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const userLoad = dataUser.user;
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
  
  restaurarContaMessage(userLoad + " Resetou a conta de email: " + censurarEmail(inpEmail.value))
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


function restaurarContaMessage(msg) {
  const url = "https://pingobras-sg.glitch.me/api/pingobras/mensagem";
  const payload = {
    titulo: "RESTAURAR-CONTA",
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
