const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Welcome to the homepage");
});


app.listen(3000, function(){
    console.log("server has started");
});