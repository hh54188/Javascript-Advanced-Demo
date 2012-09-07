var express = require('express');
var app = express();
app.configure(function () {
	// app.use(express.static(__dirname + '/MyThirdApp'));
	// app.use(express.static(__dirname + '/myapp'));

	app.use(express.static(__dirname));
})

app.listen(7000);