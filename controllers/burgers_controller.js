var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../modules/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.all(function(burgerData) {
      console.log(burgerData);
    res.render("index", { burgers: burgerData });
  });
});

router.put("/burger/eatit/:id", function(req, res) {
    db.update(req.params.id, function(burgerData) {
        console.log(burgerData);
        res.json(burgerData);
    });
  });

router.post("/burger/create", function(req, res) {
  console.log(req.body.name);
  db.create(req.body.name, function(burgerData) {
    console.log(burgerData);
    res.redirect("/");
  });
});

router.delete("/burger/deleteit/:id", function(req, res) {
    db.delete(req.params.id, function(burgerData) {
        console.log(burgerData);
        res.json(burgerData);
    });
  });
module.exports = router;
