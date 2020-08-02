

var express = require("express");
var app = express();
var router = express.Router();
app.use(express.static('public'));

var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/events",function(req,res){
    res.sendFile(path + "events.html");
});

router.get("/programs",function(req,res){
    res.sendFile(path + "programs.html");
});

router.get("/getinvolved",function(req,res){
    res.sendFile(path + "getinvolved.html");
})

app.use("/",router);