(function () {
  const monitorInterval = 60 * 1000; // 60 seconds
  const telemetryEndpoint = "https://pingobras-sg.glitch.me/telemetry";

  // Função para checar a disponibilidade do site
  async function checkSiteAvailability() {
    try {
      const response = await fetch(window.location.href);
      if (!response.ok) throw new Error("Site Unavailable");
      return true;
    } catch (error) {
      reportError("site_availability", error.message);
      return false;
    }
  }

  // Função para testar o login
  async function testLogin() {
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          Authorization: "APIKey20231603",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: "test", password: "test" }),
      });
      if (!response.ok) throw new Error("Login Failed");
      return true;
    } catch (error) {
      reportError("login_test", error.message);
      return false;
    }
  }

  // Função para testar o envio de arquivos
  async function testFileUpload() {
    try {
      const formData = new FormData();
      formData.append(
        "file",
        new Blob(["test file content"], { type: "text/plain" }),
        "test.txt"
      );
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("File Upload Failed");
      return true;
    } catch (error) {
      reportError("file_upload_test", error.message);
      return false;
    }
  }

  // Função para reportar erros ao servidor de telemetria
  function reportError(type, message) {
    const payload = {
      site: window.location.href,
      type,
      message,
      timestamp: new Date().toISOString(),
    };
      fetch(telemetryEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(console.error);
    }

  // Função principal de monitoramento
  async function monitor() {
    const siteAvailable = await checkSiteAvailability();
    if (siteAvailable) {
      await testLogin();
      await testFileUpload();
    }
  }

  // Iniciar monitoramento periódico
  setInterval(monitor, monitorInterval);
})();
