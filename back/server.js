//import
var express = require('express');

// Import routes
var apiRouter = require("./api.router").router;
// Import Body parser
var bodyParser = require('body-parser');
// Import Mongoose
var mongoose = require('mongoose');


//instance server
var server = express();

// Configure bodyparser to handle post requests
server.use(bodyParser.urlencoded({
    extended: true
 }));
 server.use(bodyParser.json());

//routes
server.get('/', function(req, res){
    res.setHeader('Content-Type','text/html');
    res.status(200).send('<h1>Bonjour et bienvenue sur le serveur node de carlben</h1>');
});


// Use Api routes in the App
server.use('/api/', apiRouter);

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost:27017/myapp',{useNewUrlParser: true });

var db = mongoose.connection;
//console.log(db);
//launch server
server.listen(8080,function(){
    console.log('serveur en ecoute')
});
