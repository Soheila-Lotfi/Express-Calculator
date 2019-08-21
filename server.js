var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

// Routes

app.get("/:operation/:firtNum/:secondNum", function(re, res) {
  var operation = req.params.operation;
  var firtNum = req.params.firtNum;
  var secondNum = req.params.secondNum;
});

// start the server

app.listen(PORT, function() {
  console.log("The server is listening on : " + PORT);
});
