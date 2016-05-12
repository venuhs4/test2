var express = require('express');
var app = express();
var http = require('http');
app.get('/data', function (req, res) {
    res.end('This is from server(Venu)' + new Date());
})
http.createServer(app).listen(8081);