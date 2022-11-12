if ("serviceWorker" in navigator) {
	console.log("Registrando worker da network...");
	navigator.serviceWorker
		.register("js/network.js")
		.then(function (reg) {
			if (navigator.serviceWorker.controller === null) {
				navigator.serviceWorker.ready.then(() => {
					reg.active.postMessage("claimMe");
				});
			}
			console.log("Worker network registrado!");
		})
		.catch(function (err) {
			console.log("Erro ao registrar worker: ", err);
		});
}
if ("serviceWorker" in navigator) {
	console.log("Registrando worker...");
	navigator.serviceWorker
    .register("js/worker.js")
		.then(function (reg) {
			if (navigator.serviceWorker.controller === null) {
				navigator.serviceWorker.ready.then(() => {
					reg.active.postMessage("claimMe");
				});
			}
			console.log("Worker js registrado!");
		})
		.catch(function (err) {
			console.log("Erro ao registrar worker: ", err);
		});
}
