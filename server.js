// npm module packages
var bodyParser = require("body-parser");
var express = require("express");
var methodOverride = require("method-override");


// Specify Port Number
var PORT = process.env.PORT || 3000;

// Initialize express app
var app = express();


// Static content available throuhg public directory.
app.use(express.static(process.cwd() + "/public"));

// Parse the application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride("_method"));

// Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");


app.use("/", routes);


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});