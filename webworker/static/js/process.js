self.addEventListener('message', function (e) {
	setInterval(function () {
		self.postMessage(e.data);
	}, 3000)
}, false)