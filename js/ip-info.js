const btndev = document.getElementById("btndev");
const linkIP = document.getElementById("linkIP");
const navApp = document.getElementById("navigator-app");
const cidadeLabel = document.getElementById("city");
const paisLabel = document.getElementById("pais");
const regiaoLabel = document.getElementById("regiao");
const timezoneLabel = document.getElementById("timezone");
const locationLabel = document.getElementById("location");
const IPLabel = document.getElementById("IP");
const HostIPLabel = document.getElementById("HostIP");
const postalLabel = document.getElementById("postal");
const ISPLabel = document.getElementById("ISP");
const Scheme = "https://"
const token = "?token=f1dd48b5ecd676"
const url = Scheme + "ipinfo.io/json" + token

fetch(url)
  .then((response) => response.json())
  .then((jsonResponse) => infoIP(jsonResponse));

function infoIP(response) {
  if (cidadeLabel) {
    cidadeLabel.innerHTML = response.city;
  }
  if (paisLabel) {
    paisLabel.innerHTML = response.country;
  }
  if (regiaoLabel) {
    regiaoLabel.innerHTML = response.region;
  }
  if (timezoneLabel) {
    timezoneLabel.innerHTML = response.timezone;
  }
  if (locationLabel) {
    locationLabel.innerHTML = response.loc;
  }
  if (IPLabel) {
    IPLabel.innerHTML = response.ip;
    if (linkIP) {
      linkIP.href = "http://" + linkIP.name;
      linkIP.name = response.ip;
    }
  }
  if (HostIPLabel) {
    HostIPLabel.innerHTML = response.hostname;
  }
  if (postalLabel) {
    postalLabel.innerHTML = response.postal;
  }
  if (ISPLabel) {
    ISPLabel.innerHTML = response.org;
  }
  if (navApp) {
    navApp.innerHTML = navigator.appCodeName;
  }

  if (response.city == "Colatina" || response.city == "colatina") {
    btndev.hidden = false;
  }
}
