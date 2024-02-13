setTimeout(loaderCopy,5000);

function loaderCopy() {
    const direitos = document.getElementById("direitos")
    const divDevElement = document.createElement("div")
    const divContatoElement = document.createElement("div")
    const h4Element = document.createElement("h4")
    const pMembersElement = document.createElement("p")
    const pAllReservedElement = document.createElement("p")
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

    for (let i = 0; i < members.length; i++) {
        const membro = members[i];
        textMembers = textMembers + ` &amp; ${membro}`
    }

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

    scriptUnpkgElement.setAttribute("type", "module")
    scriptUnpkgNoModuleElement.setAttribute("nomodule", "");
    scriptUnpkgElement.setAttribute("src", "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js");
    scriptUnpkgNoModuleElement.setAttribute("src", "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js");
    scriptAvaliacaoElement.setAttribute("src","https://guilhermeantonioo.github.io/site-teste/src/js/script.js")

    //reset do direitos para remover loadings
    direitos.innerHTML = ""

    // config dos devs
    h4Element.textContent = "Desenvolvedores:"
    pAllReservedElement.innerHTML = "&copy; Todos os Direitos Reservados &reg;"
    pMembersElement.innerHTML = textMembers

    divDevElement.setAttribute("class", "devs")
    divDevElement.appendChild(h4Element)
    divDevElement.appendChild(pMembersElement)
    divDevElement.appendChild(pAllReservedElement)

    direitos.appendChild(divDevElement)
    direitos.appendChild(divContatoElement)
    direitos.appendChild(scriptUnpkgElement)
    direitos.appendChild(scriptUnpkgNoModuleElement)
    direitos.appendChild(scriptAvaliacaoElement)

}