(() => {
  const form = document.getElementById("form");
  const formCode = document.getElementById("formCode");
  const msgError = document.getElementById("msgError");
  const msgSuccess = document.getElementById("msgSuccess");
  const cookieContinuarConectado = getCookie("continuarConectado");
  const lastDataUser = localStorage.getItem("dataUser");

  form.addEventListener("submit", stopDefAction);
  formCode.addEventListener("submit", stopDefActionSendCode);

  if (cookieContinuarConectado == "true" && lastDataUser) {
    window.location.href = "/user";
  }

  function stopDefAction(event) {
    event.preventDefault();
    getData();
  }

  function stopDefActionSendCode(event) {
    event.preventDefault();
    sendCode();
  }

  function getData() {
    const inpEmail = document.getElementById("email");
    const url = "https://pingobras-sg.glitch.me/api/pingobras/login/magiclink";
    const date = new Date();
    const id = Math.floor(Math.random() * 20242002);
    const payloadLogin = {
      email: inpEmail.value,
      type: "user",
    };
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json;charset=utf-8",
        Authorization: "snve072509ç$",
        key: date.getUTCHours() * date.getFullYear() * id,
        id: id,
      },
      body: JSON.stringify(payloadLogin),
    };

    msgError.setAttribute("style", "display: none");
    msgSuccess.innerHTML = "Aguardando Servidor....";
    msgSuccess.setAttribute("style", "display: block");
    loginMessage(`${censurarEmail(inpEmail.value)} Pediu um magic Link!`);

    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          loginMessage(`Magic Link enviado com sucesso!`);
          return response.text();
        } else {
          return response.text().then((errorText) => {
            loginMessage("Erro ao Enviar Codigo Magick Link: " + errorText);
            throw new Error("Erro ao Enviar Codigo Magick Link: " + errorText);
          });
        }
      })
      .then((data) => {
        console.log("DATA RESPONSE: ");
        console.log(data);
        alert(data);
        form.hidden = true;
        formCode.hidden = false;
      })
      .catch((error) => onError(error));
  }

  function sendCode() {
    const inpEmail = document.getElementById("email");
    const inpCode = document.getElementById("code");
    const url = "https://pingobras-sg.glitch.me/api/pingobras/login";
    const date = new Date();
    const id = Math.floor(Math.random() * 20242002);
    const payloadLogin = {
      email: inpEmail.value,
      code: inpCode.value,
    };
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json;charset=utf-8",
        Authorization: "snve072509ç$",
        key: date.getUTCHours() * date.getFullYear() * id,
        id: id,
      },
      body: JSON.stringify(payloadLogin),
    };

    msgError.setAttribute("style", "display: none");
    msgSuccess.innerHTML = "Aguardando Servidor....";
    msgSuccess.setAttribute("style", "display: block");
    loginMessage(censurarEmail(inpEmail.value) + " está tentando fazer login!");
    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          loginMessage(
            censurarEmail(inpEmail.value) + " Fez Login com sucesso!"
          );
          return response.json();
        } else {
          return response.text().then((errorText) => {
            loginMessage("Erro ao fazer login: " + errorText);
            throw new Error("Erro ao fazer login: " + errorText);
          });
        }
      })
      .then((data) => {
        console.log("DATA RESPONSE: ");
        console.log(data);
        autenticar(data);
      })
      .catch((error) => onError(error));
  }

  function autenticar(userLogado) {
    const manterConectado = document.getElementById("continueConnected");
    const dataUserJson = JSON.stringify(userLogado);
    const cords = 127;
    const seed =
      getRandomInt(cords) *
      getRandomInt(cords) *
      getRandomInt(cords) *
      getRandomInt(cords);
    const hexKey =
      getRandomHex(seed) +
      getRandomHex(seed) +
      getRandomHex(seed) +
      getRandomHex(seed);
    const clientID = getRandomInt(255);
    let token = hexKey + hexKey + "ValidDB:" + clientID;

    localStorage.setItem("token", token);
    msgError.setAttribute("style", "display: none");
    msgSuccess.innerHTML = "Validando acesso...";
    msgSuccess.setAttribute("style", "display: block");
    localStorage.setItem("dataUser", dataUserJson);
    setCookie("continuarConectado", manterConectado.checked, 5);

    setTimeout(() => {
      window.location.href = "/user";
    }, 7000);
  }

  function onError(error) {
    console.debug(error);
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML = error;
    msgSuccess.setAttribute("style", "display: none");
  }

  function loginMessage(msg) {
    const url = "https://pingobras-sg.glitch.me/api/pingobras/mensagem";
    const payload = {
      titulo: "LOGIN",
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
      const censurado = email.slice(0, 5) + "*".repeat(email.length - 5);
      return censurado;
    } else {
      // Se o email for menor que 5 caracteres, não faz nada
      return email;
    }
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomBin(max) {
    return Math.floor(Math.random() * max).toString(2);
  }

  function getRandomHex(max) {
    return Math.floor(Math.random() * max).toString(16);
  }

  function genTokenEncodeBase64(user, password) {
    var token = user + ":" + password;
    var encodedToken = btoa(token);
    return "Basic " + encodedToken;
  }

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
})();
