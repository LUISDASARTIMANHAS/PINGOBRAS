const listagemItens = document.getElementById("listagemItens");
const buttonWAImg =
  "https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/WhatsAppButtonGreenSmall.png?v=1686259021050";
const notFoundLink =
  "https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/2748558.png?v=1694725753717";

function getData() {
  const url = "https://pingobras-sg.glitch.me/produto";
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
      Authorization: "snve072509ç$",
    },
  };

  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Erro na solicitação, URL inválida ou fetch inválido");
        return response.text();
      }
    })
    .then((data) => {
      console.log("DATA RESPONSE: ");
      console.log(data);
      loadProdutos(data);
    })
    .catch((error) => alert(error));
}
getData();

function loadProdutos(database) {
  for (let i = 0; i < database.length; i++) {
    let produto = database[i];
    let prdtNome = produto.name;
    let prdtImg = produto.image;
    let prdtMarca = produto.marca;
    let prdtEspaco = produto.espaco;
    let prdtMem = produto.memoria;
    let prdtCor = produto.cor;
    let prdtQtd = produto.estoque;
    let prdtSis = getSistemaLink(produto.sistema);
    let prdtTell = produto.contato;
    let prdtInfo = produto.descricao;
    let produtoElement = document.createElement("li");
    // newScriptUser.setAttribute('src',fonteUser+srcsUser[i]+".js");
    if (!prdtNome) {
      prdtNome = "404 Not Found"
    }
    if (!prdtImg) {
      prdtImg = notFoundLink
    }
    if (!prdtMarca) {
      prdtMarca = "Não encontrado"
    }
    if (!prdtEspaco) {
      prdtEspaco = "0GB"
    }
    if (!prdtMem) {
      prdtMem = "0GB"
    }
    if (!prdtCor) {
      prdtCor = "Não encontrado"
    }
    if (!prdtQtd) {
      prdtQtd = 0
    }
    if (!prdtTell) {
      prdtTell = "#"
    }
    if (!prdtInfo) {
      prdtInfo = "O produto não pode ser encontrado! falha ao se comunicar ou loja vazia"
    }

    //div Info
    const divInfo = document.createElement("div");
    const DivInfoSpan = document.createElement("span");
    DivInfoSpan.textContent = prdtNome;
    divInfo.setAttribute("class", "info");
    divInfo.appendChild(DivInfoSpan);

    // imagem / tumbnail do produto
    const produtoImg = document.createElement("img");
    produtoImg.setAttribute("class", "produto-img");
    produtoImg.setAttribute("alt", prdtNome);
    produtoImg.src = prdtImg;

    //atributos dos produtos
    const tipoMarca = document.createElement("li");
    const tipoEspaco = document.createElement("li");
    const tipóMemoria = document.createElement("li");
    const tipoSistema = document.createElement("li");
    const tipoSistemaImg = document.createElement("img");
    const tipoEstoque = document.createElement("li");

    tipoSistemaImg.src = prdtSis;
    tipoSistemaImg.setAttribute("class", "icon-sistema");
    tipoMarca.setAttribute("class", "tipo marca");
    tipoEspaco.setAttribute("class", "tipo espaco");
    tipóMemoria.setAttribute("class", "tipo memoria");
    tipoSistema.setAttribute("class", "tipo sistema");
    tipoEstoque.setAttribute("class", "tipo indisponivel");
    tipoMarca.textContent = prdtMarca;
    tipoEspaco.textContent = prdtEspaco;
    tipóMemoria.textContent = prdtMem;
    tipoSistema.appendChild(tipoSistemaImg);
    tipoEstoque.textContent = "indisponivel";

    //tipos e atributos dos produtos
    const produtoTipos = document.createElement("ul");
    produtoTipos.setAttribute("class", "tipos");
    produtoTipos.appendChild(tipoMarca);
    produtoTipos.appendChild(tipoEspaco);
    produtoTipos.appendChild(tipóMemoria);
    produtoTipos.appendChild(tipoSistema);
    if (prdtQtd < 1) {
      produtoTipos.appendChild(tipoEstoque);
    }

    //Pagina de detalhes dos produtos
    const produtoDetalhes = document.createElement("a");
    const link = prdtNome.replaceAll(" ", "-");
    produtoDetalhes.href = "/user/loja/" + link + ".html";
    produtoDetalhes.textContent = "Ver Mais Detalhes";

    //comunicação e contato com os fornecedores dos produtos
    const produtoContato = document.createElement("a");
    const produtoImgWa = document.createElement("img");

    produtoImgWa.setAttribute("class", "whatsapp-small");
    produtoImgWa.setAttribute("alt", "Chat on WhatsApp");
    produtoImgWa.src = buttonWAImg;
    produtoContato.setAttribute("class", "whatsapp");
    produtoContato.setAttribute("target", "_blank");
    produtoContato.href = "https://wa.me/" + prdtTell;
    produtoContato.appendChild(produtoImgWa);

    //descrição do produto
    const produtoDescricao = document.createElement("p");
    produtoDescricao.setAttribute("class", "descricao");
    produtoDescricao.textContent = prdtInfo;

    produtoElement.setAttribute("class", "produto");
    produtoElement.appendChild(divInfo);
    produtoElement.appendChild(produtoImg);
    produtoElement.appendChild(produtoTipos);
    produtoElement.appendChild(produtoDetalhes);
    produtoElement.appendChild(produtoContato);
    produtoElement.appendChild(produtoDescricao);

    listagemItens.appendChild(produtoElement);
    // console.log(" Novo Script Num: " + srcsUser[i])
  }
}

function getSistemaLink(sistema) {
  const iconSisAndroid =
    "https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/android.png?v=1686257233518";
  const iconSisWindows =
    "https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/Windows_logo_-_2012_(dark_blue).svg.png?v=1652101587081";
  const iconSisIos =
    "https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/ios-logo.png?v=1686257129165";
  const errorIcon =
    "https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/error-icon.png?v=1694275041488";

  if (sistema == "android") {
    return iconSisAndroid;
  } else if (sistema == "windows") {
    return iconSisWindows;
  } else if (sistema == "ios") {
    return iconSisIos;
  } else {
    return errorIcon;
  }
}
