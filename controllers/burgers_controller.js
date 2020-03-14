var express = require("express");

var router = express.Router();

var db = require("../modules/burger.js");

router.get("/", function(req, res){
    db.all(function(burgerData){
    res.render("index", {burgers:burgerData})
    }
    )
})
router.post("/burger/create", function(req, res){
    console.log(req.body.name)
    db.create(req.body.name,function(burgerData){
        console.log(burgerData)
        res.redirect("/")
    }
    )
})
module.exports=router;
