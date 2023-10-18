const links = document.querySelector("links");
const srcsLinks = [
  "footer",
  "style", 
  "btn", 
  "head",            
  "RGB", 
  "main",
  "temas",
  "bootstrap"
];
const srcsLinksFonts = [
  "4.7.0/css/font-awesome.min.css"
];

for (let i = 0; i < srcsLinks.length; i++) {
  var newLink = document.createElement("link");

  newLink.setAttribute("href","https://pingobras.glitch.me/css/" + srcsLinks[i] + ".css");
  newLink.rel = "stylesheet";
  links.appendChild(newLink);

  console.log(" Novo Link de css Num: " + srcsLinks[i]);
}

for (let i = 0; i < srcsLinksFonts.length; i++) {
  const head = document.querySelector("head");
  var newLink = document.createElement("link");

  newLink.setAttribute("href","https://stackpath.bootstrapcdn.com/font-awesome/" + srcsLinksFonts[i]);
  newLink.rel = "stylesheet";
  head.appendChild(newLink);

  console.log("Novo Link de fonte css Num: " + srcsLinksFonts[i]);
}