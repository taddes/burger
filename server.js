// npm module packages

var bodyParser = require("body-parser");
var express = require("express");
var routes = require("./controllers/burgers_controller.js");

// Initialize express app
var app = express();


// Static content available throuhg public directory.
app.use(express.static(process.cwd() + "/public"));

// Parse the application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.use("/", routes);

var PORT = process.env.PORT || 3000;
app.listen(PORT);