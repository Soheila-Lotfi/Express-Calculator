var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

/// Routes

// start the server

app.listen(PORT, function() {
  console.log("The server is listening on : " + PORT);
});
