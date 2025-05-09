document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("solicitarParceria");

  button.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Você será redirecionado!");
    window.location.href =
      "https://discord.com/channels/787686038633840640/1254082775045116066";
  });
});
