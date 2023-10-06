const urlPosts = "https://pingobras-sg.glitch.me/postagens"; // URL de destino
const labelPostID = document.getElementById("newPostID");
const author = document.getElementById("newPostAuthor");
const form = document.querySelector("form");
const dataUserBlog = localStorage.getItem("dataUser");
const dataUserJson = JSON.parse(dataUserBlog);
const date = new Date();
const dia = date.getDay() - 1;
const mes = date.getMonth() + 1;
const ano = date.getFullYear();
const data = dia + "/" + mes + "/" + ano;
var CKEDITOR;

author.value = dataUserJson.user;

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

function sendPost() {
  const title = document.getElementById("newPostTitle");
  const conteudo = editor();
  const tags = document.getElementById("newPostTags");
  const payload = {
    title: title.value,
    author: dataUserJson.user,
    conteudo: conteudo,
    date: data,
    tags: tags.value,
    id: 9,
  };
  const requestOptionsPosts = {
    method: "POST",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
      Authorization: "snve072509ç$",
    },
    body: JSON.stringify(payload),
  };

  fetch(urlPosts, requestOptionsPosts)
    .then((response) => {
      return response.text(); // Pegar o texto da resposta
    })
    .then((data) => {
      alert("SERVIDOR: " + data); // Exibirá "Post criado com sucesso!"
      window.location.href = "/user/blog";
    })
    .catch((error) => errosSend(error));
}

function errosSend(error) {
  console.debug(error);
}
function editor() {
  const editorData = CKEDITOR.instances.newPostConteudo.getData();
  return editorData;
}
