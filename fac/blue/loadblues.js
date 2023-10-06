const boxblueprints = document.getElementById("blueprints");
const fonte = "https://cdn.discordapp.com/attachments/334735604342325249/";
const finalLink = "/blueprint.png";
const id = [
  "1116373925086117958",
  "1116373928244412527",
  "1116373928244412527",
  "1116373932426141706",
  "1116373933986418728",
  "1116373935764807772",
  "1116373938637897759",
  "1116373941544562758",
  "1116373992736043008",
  "1116373997450428506",
  "1116711158188097546",
  "1116711162239791254",
  "1116374010482143252",
  "1116711178190737428",
  "1116374028547014707",
  "1116374030673510460",
  "FABRICA DE MOTOR ELETRICO",
  "FABRICA DE CHASSI DE ROBO VOADOR",
  "",
  "",
];
const txt = [
  "PROCESSAMENTO DE MINERIOS NV1",
  "PROCESSAMENTO DE MINERIOS NV2",
  "PROCESSAMENTO DE MINERIOS NV3",
  "FABRICA DE TORRES DE FOGO",
  "FABRICA DE MONTAGEM NVL 1 E 2",
  "FABRICA DE CONCRETO E REFINADO",
  "GAMBIARRA ITENS BASICOS",
  "FABRICA DE UNIDADE MOTORA",
  "RADAR AUTO",
  "ENRRIQUECIMENTO DE URANIO",
  "TURBINAS DE ENERGIA REATOR NUCLEAR",
  "REATOR NUCLEAR",
  "NUCLEAR POWER PLANT",
  "Solar x4",
  "ENERGIA SOLAR 4X2 SIMPLES 3.840MW",
  "SUBSTAÇÃO SOLAR",
  ""
]



for (let i = 0; i < id.length; i++) {
  var blueprint = document.createElement("blueprint");
  var img = document.createElement("img");
  var button = document.createElement("button");
  var pngLink = fonte + id[i] + finalLink;

  img.setAttribute("src", pngLink);
  button.setAttribute("onclick", "window.open('"+pngLink+"')");
  button.setAttribute("class", "button flex-space-between");
  button.innerHTML = txt[i]

  boxblueprints.appendChild(blueprint);
  blueprint.appendChild(img);
  blueprint.appendChild(button);
}
