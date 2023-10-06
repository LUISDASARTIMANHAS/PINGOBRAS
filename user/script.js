let NewDeviceUser =
  navigator.userAgent +
  " Utilizando: " +
  navigator.appName +
  "." +
  navigator.appCodeName;
var STDEVICE2 = [];
STDEVICE2 = JSON.parse(sessionStorage.getItem("LASTDEVICES")) || [];
STDEVICE2.push(NewDeviceUser);
sessionStorage.setItem("LASTDEVICES", JSON.stringify(STDEVICE2));
