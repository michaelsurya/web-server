var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

//app.use(middleware.requireAuthentication);
app.use(middleware.logger); //App level middleware

app.get('/about', middleware.requireAuthentication, function(req, res) { //middleware route
    res.send('About us!')
});

app.use(express.static(__dirname + '/public')); //Important

app.listen(PORT, function() {
    console.log('Express server started on port: ' + PORT)
});