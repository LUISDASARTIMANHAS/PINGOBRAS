setTimeout(loaderCopy, 5000);

function loaderCopy() {
  const direitos = document.getElementById("direitos")
    const footer = document.querySelector("footer")
    const divDevElement = document.createElement("div")
    const divContatoElement = document.createElement("div")
    const h4Element = document.createElement("h4");
    const pMembersElement = document.createElement("p")
    const pAllReservedElement = document.createElement("p")

    const avaliacoes = document.createElement("div");
    const h3Element = document.createElement("h3");
    const ulAvaliacaoElement = document.createElement("ul")
    const liEstrelasAtivaElement = document.createElement("li")
    const spanContadorElement = document.createElement("span");
    const buttonBtnElement = document.createElement("button");
    const pTextAvaliacaoElement = document.createElement("p");
    const pMensagemElement = document.createElement("p");
    const aExternoElement = document.createElement("a");
    const pDesenvElement = document.createElement("p");

    const scriptUnpkgElement = document.createElement("script")
    const scriptUnpkgNoModuleElement = document.createElement("script")
    const scriptAvaliacaoElement = document.createElement("script")

    const members = [
        "Pingobras S.A",
        "Guilherme Antônio",
    ]
    const contatoDB = [
        {
            "text": "luis_das_artimanhas@gmail",
            "logo": "mail-outline",
            "href": "mailto:luisaugustodesouza785@gmail.com"
        },
        {
            "text": "Fale Conosco",
            "logo": "logo-whatsapp",
            "href": "https://wa.me/55027995744791"
        },
        {
            "text": "Github",
            "logo": "logo-github",
            "href": "https://github.com/LUISDASARTIMANHAS"
        },
        {
            "text": "Linkedin",
            "logo": "logo-linkedin",
            "href": ""
        }
    ]
    let textMembers = "&copy; LUIS DAS ARTIMANHAS"

    // Configurações da h3 da avaliação
    h3Element.id = "avalie"
    h3Element.textContent = "Avalie meu site:"

    // Configurações da li da ul da avaliação
    liEstrelasAtivaElement.setAttribute("class", "estrelas ativo")
    liEstrelasAtivaElement.setAttribute("data-avaliacao", 1)

    // Configurações da ul da avaliação
    ulAvaliacaoElement.appendChild(liEstrelasAtivaElement)
    for (let o = 0; o < 5; o++) {
        const liEstrelasElement = document.createElement("li");

        // Configurações da li da ul da avaliação
        liEstrelasElement.setAttribute("class", "estrelas")
        liEstrelasElement.setAttribute("data-avaliacao", o + 2)

        ulAvaliacaoElement.appendChild(liEstrelasElement)
    }
    ulAvaliacaoElement.setAttribute("class", "avaliacao")

    // Configurações do span do p texto de avaliação
    spanContadorElement.id = "contador"
    spanContadorElement.textContent = "1"

    // Configurações do button do p texto de avaliação
    buttonBtnElement.id = "btn"
    buttonBtnElement.textContent = "Enviar"
    buttonBtnElement.setAttribute("type", "submit")

    // Configurações do p texto de avaliação
    pTextAvaliacaoElement.id = "texto-de-avaliacao"
    pTextAvaliacaoElement.textContent = "Avaliação:"
    pTextAvaliacaoElement.appendChild(spanContadorElement);
    pTextAvaliacaoElement.appendChild(buttonBtnElement);

    // Configurações do p mensagem
    pMensagemElement.id = "mensagem"
    pMensagemElement.textContent = "Sua avaliação foi Registrada"
    pMensagemElement.setAttribute("class", "hide")

    // Configurações do a externo
    aExternoElement.textContent = "Guilherme Antônio"
    aExternoElement.setAttribute("class", "externo")
    aExternoElement.setAttribute("target", "_blank")
    aExternoElement.setAttribute("href", "https://github.com/guilhermeantonioo")

    // Configurações do p desenv
    pDesenvElement.id = "desenv"
    pDesenvElement.innerHTML = "Desenvolvido por  &#169"
    pDesenvElement.appendChild(aExternoElement)

    // Configurações do avaliacoes
    avaliacoes.id = "avaliacoes"
    avaliacoes.setAttribute("class", "avaliacoes")
    avaliacoes.appendChild(h3Element);
    avaliacoes.appendChild(ulAvaliacaoElement);
    avaliacoes.appendChild(pTextAvaliacaoElement);
    avaliacoes.appendChild(pMensagemElement);
    avaliacoes.appendChild(pDesenvElement);

    // Direitos / copyright

    //reset do direitos para remover loadings
    direitos.innerHTML = ""

    for (let k = 0; k < members.length; k++) {
        const membro = members[k];
        textMembers = textMembers + ` &amp; ${membro}`
    }

    // config dos devs
    h4Element.textContent = "Desenvolvedores:"
    pAllReservedElement.innerHTML = "&copy; Todos os Direitos Reservados &reg;"
    pMembersElement.innerHTML = textMembers

    // config dos devs
    divDevElement.setAttribute("class", "devs")
    divDevElement.appendChild(h4Element)
    divDevElement.appendChild(pMembersElement)
    divDevElement.appendChild(pAllReservedElement)

    // config dos meios de contato
    divContatoElement.setAttribute("class", "contato")
    for (let i = 0; i < contatoDB.length; i++) {
        const contato = contatoDB[i];
        const aElement = document.createElement("a")
        const ionIconElement = document.createElement("ion-icon")

        aElement.setAttribute("href", contato.href)
        aElement.target = "_blank"
        ionIconElement.name = contato.logo
        ionIconElement.textContent = contato.text

        aElement.appendChild(ionIconElement)
        divContatoElement.appendChild(aElement)
    }

    direitos.appendChild(divDevElement)
    direitos.appendChild(divContatoElement)

    // footer

    // Configurações dos scripts
    scriptUnpkgElement.setAttribute("type", "module")
    scriptUnpkgNoModuleElement.setAttribute("nomodule", "");
    scriptUnpkgElement.setAttribute("src", "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js");
    scriptUnpkgNoModuleElement.setAttribute("src", "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js");
    scriptAvaliacaoElement.setAttribute("src", "https://guilhermeantonioo.github.io/site-teste/src/js/script.js")

    footer.appendChild(avaliacoes);
    footer.appendChild(scriptUnpkgElement);
    footer.appendChild(scriptUnpkgNoModuleElement);
    footer.appendChild(scriptAvaliacaoElement);
}
