const tela = document.querySelector("tela");
const inpNum = document.getElementById("numero");
const inpText = document.getElementById("text");
const labelPreview = document.getElementById("preview");
const linkPreview = document.getElementById("linkPreview");

function generateWaLink() {
  const numFormatado = inpNum.value.replaceAll(" ", "").replaceAll("+", "");
  const textFormatado = inpText.value.replaceAll(" ", "+");
  const link = `https://wa.me/${numFormatado}?text=${textFormatado}`
  
  labelPreview.textContent = link
  linkPreview.href = link
}
generateWaLink()

// Event Listener
tela.addEventListener("keypress", () => {
  generateWaLink();
});
