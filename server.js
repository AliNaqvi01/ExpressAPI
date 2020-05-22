var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser')
var cors = require('cors');
var mongo = require('mongodb');
var mongoose = require('mongoose');
const assert = require('assert')
const Data = require('./models/schema')


app.use(cors());

app.use(bodyParser.json())

// Creates a database 'myDB' to store the form data
mongoose.connect('mongodb://localhost/myDB');
mongoose.connection.once('open', function(){
    console.log("Connected!")
}).on('error', function(error){
    console.log('Connection Error:', error)
})

// The API takes either Foo or Bar and returns True
// RegEx was used to reduce code by using only 1 route instead of 2 (one for Foo and one for Bar)
app.get('/:var(Foo|Bar)?', function (req, res) {
   fs.readFile( __dirname + "/" + "return.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( " 'request': true " );
   });
})

// Read the post request by the form and put the data in the Database
app.post('/form', function (req, res) {
    console.log(req.body.email)
    console.log(req.body.phone)


    var data = new Data({
        phone: req.body.phone,
        email: req.body.email
    })

    data.save().then(function(){

        assert(data.isNew == false)

    })
    

    res.send("HI");
    
})

app.get('/*', function(req,res){

    res.end( " 'request': false " );

});


// All other URLs will return False

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})