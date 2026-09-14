const chatFrame = document.querySelector("#chat-frame");
const frameLoading = document.querySelector("#frame-loading");
const connectionStatus = document.querySelector("#connection-status");

chatFrame.addEventListener("load", () => {
  frameLoading.classList.add("is-hidden");
  connectionStatus.textContent = "Conectado";
  document.body.classList.add("is-connected");
});