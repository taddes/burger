/*
Inside your burger directory, create a folder named controllers.

In controllers, create the burgers_controller.js file.

Inside the burgers_controller.js file, import the following:

Express
burger.js
Create the router for the app, and export the router at the end of your file.
*/


var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

router.get("/", function(req, res){
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res){
  burgers.all(function(data){
    res.render("index", {burgers: data});
  });
});

router.post("/burgers/create", function(req, res){
  burgers.create(["burger_name"], [req.body.burger], function(){
    res.redirect("/burgers");
  });
});

router.put("/burgers/update/:id", function(req, res){
  burgers.update(req.body.devoured, req.params.id, function(){
    res.redirect("/burgers");
  });
});

router.delete("/burgers/delete/:id", function (req, res){
  burgers.delete(req.params.id, function(){
    res.redirect("/burgers");
  });
});

module.exports = router;
