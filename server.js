var http = require('http');
var fs = require('fs');
var open = require('open');
var express  = require('express');
var app = express();
var port = process.env.PORT || 8080;
var dataRoutes = require('./routes/dataRoutes.js');

app.use(express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));

app.use('/data', dataRoutes);

app.all('/work', function(req, res, next) {
    res.sendFile('public/Index.html', { root: __dirname });
});

app.listen(port, function(){
	console.log("Server is running at " + port);
	open('http://127.0.0.1:8080/work');
});