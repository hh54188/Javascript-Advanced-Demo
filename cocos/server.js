var express = require('express');
var app = express();
app.configure(function () {
	app.use(express.static(__dirname + '/myapp'));
})

app.listen(7000);