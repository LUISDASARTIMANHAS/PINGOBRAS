window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    console.log('This page was restored from the bfcache.');
  } else {
    console.log('This page was loaded normally.');
  }
});
window.addEventListener('pagehide', (event) => {
  if (event.persisted) {
    console.log('This page *might* be entering the bfcache.');
  } else {
    console.log('This page will unload normally and be discarded.');
  }
});

window.addEventListener('pageshow', (event) => {
  if (event.persisted && !document.cookie.match("login")) {
    // Force a reload if the user has logged out.
    location.reload();
  }
});