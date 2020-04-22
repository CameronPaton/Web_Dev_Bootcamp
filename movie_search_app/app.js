const express = require("express");
const app = express();
const request = require("request");
app.set("view engine", "ejs");

app.get("/search", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    const query = req.query.search;
    const apiKey = "&apikey=thewdb";
    const url = "http://omdbapi.com/?s=" + query + apiKey;

    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            const data = JSON.parse(body);
            res.render("results", {data: data});
        };
    })
});

app.listen(3000, function(){
    console.log("the server has started!!");
});

//&apikey=thewdb