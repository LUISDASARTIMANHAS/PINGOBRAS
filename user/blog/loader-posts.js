setInterval(getPosts, 20000);
const protocolPost = "";
const url = "https://pingobras-sg.glitch.me/postagens"; // URL de destino
const options = {
  method: "GET",
  mode: "cors",
  headers: {
    "content-type": "application/json;charset=utf-8",
    Authorization: "snve072509ç$",
  },
};
getPosts();

function getPosts() {
  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Erro na solicitação, URL invalido ou fetch invalido");
      }
    })
    .then((data) => {
      console.log("DATA RESPONSE: ");
      console.log(data);
      resposta(data);
    })
    .catch((error) => erros(error));
}

function erros(error) {
  console.debug(error);
  alert(error);
}

function resposta(data) {
  const postList = document.getElementById("postList");

  // Limpa a lista de postagens antes de adicionar as novas
  postList.innerHTML = "";

  // Adiciona cada post à lista
  data.forEach((post) => {
    const postItem = document.createElement("li");
    const postTitle = document.createElement("div");
    const postAuthor = document.createElement("p");
    const postInfo = document.createElement("p");
    const postData = document.createElement("div");
    const postTags = document.createElement("div");

    postTitle.classList.add("title-post");
    postInfo.classList.add("info-post");
    postTags.classList.add("tags-post");
    postData.classList.add("data-post");
    postAuthor.classList.add("author-post");

    postTitle.innerHTML = post.title;
    postInfo.innerHTML = post.conteudo;
    postTags.textContent = "TAGS: " + post.tags;
    postData.textContent = "Data da postagem: " + post.date;
    postAuthor.innerHTML = "ASS: " + post.author;

    postItem.appendChild(postTitle);
    postItem.appendChild(postInfo);
    postItem.appendChild(postTags);
    postItem.appendChild(postData);
    postItem.appendChild(postAuthor);

    postItem.classList.add("post");
    postList.appendChild(postItem);
  });
  return data.lenght
}