const express = require("express");
const app = express();
const request = require("request");

app.get("/results", function(req, res){
    res.send("Homepage");
})

app.listen(3000, function(){
    console.log("the server has started!!");
})