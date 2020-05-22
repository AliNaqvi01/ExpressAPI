var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongo = require("mongodb");
var mongoose = require("mongoose");
const assert = require("assert");
const Data = require("./models/schema");

// We need to enable CORS for the server to work properly
app.use(cors());
app.use(bodyParser.json());

// Creates a database 'myDB' to store the form data
mongoose.connect("mongodb://localhost/myCodingProjectDB");
mongoose.connection
  .once("open", function () {
    console.log("Connected!");
  })
  .on("error", function (error) {
    console.log("Connection Error:", error);
  });

// The API takes either Foo or Bar and returns True
// RegEx was used to reduce code by using only 1 route instead of 2 (one for Foo and one for Bar)
app.get("/:var(Foo|Bar)?", function (req, res) {
  fs.readFile(__dirname + "/" + "return.json", "utf8", function (err, data) {
    console.log(data);
    res.end(" 'request': true ");
  });
});

// Read the post request by the form and put the data in the Database
app.post("/form", function (req, res) {
  console.log(req.body.email);
  console.log(req.body.phone);

// Create a data object based on the Schema that is defined
  var data = new Data({
    phone: req.body.phone,
    email: req.body.email,
  });

// RegEx to server-side validate the phone and email
  const validEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validPhone = (phone) => {
    const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    return re.test(phone);
  };

// If it validates, then save in the database
  if (validEmail(req.body.email) && validPhone(req.body.phone)) {
    data.save().then(function () {
      assert(data.isNew == false);
    });
    console.log("Saved");
    res.send("Saved");
  } else {
    res.send("Error validating email or phone number");
  }
});

// This is a catch all that will return false if Foo/Bar is not entered
app.get("/*", function (req, res) {
  res.end(" 'request': false ");
});

// All other URLs will return False

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
