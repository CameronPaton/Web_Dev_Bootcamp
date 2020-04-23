## Web Developer Bootcamp Project 3

### Movie Search API Application

---

##### Project Overview

The Movie Search API Application is from Section 27 of the Udemy Web Developer Bootcamp course, by Colt Steele. This project is a code along project making use of Express, npm, EJS, and linking to an API from the site OMDB. It was also a good way to implement all the learning points from the Back End tutorials so far. 

There is no styling involved so the appearance is bare bones, but the functionality is useful. The user enters a search term into the input box and will then be routed to a results page with all results from the omdb site containing that search term. 

The key learning points were how to use a form with an input box and use the correct "action" value to link the relevant route and use the GET method. Applying the use of the "name" attribute to lock in the value entered by the user. This app also makes use of the Request package to request the API data from the database and rendering the results in an EJS template after parsing the JSON file from a string to an object so that it's accessible. It was also useful to know how to get specific data from the API and looping through the results using a forEach. 

---

##### Technologies

*  Node and Node Package Manager (NPM)
*  Express
*  JavaScript Object Notation (JSON)
*  JavaScript

---

##### Preview

![preview](https://github.com/CameronPaton/Images-Portfolio/blob/master/Movie_Search_App.png?raw=true)

---

##### Functionality

Node Package Manager was used to initialise a package.json file. I then installed in the working directory express, EJS and the request packages using --save to record the dependencies in my package.json file. These were then called using require, and app.set. 

The application has two routes which is the /search route and the /results route. A listener has also been set. 

The route /search, is just a get request which renders to the user the search EJS template. /search.ejs is the homepage. The search.ejs file contains a form with an input box. The form tag has an action attribute and a method attribute. The action is to use the /results route and the method is a GET request. The results route is where the API will be used to receive the users search term and request from the external website. The rest of the form is standard, except the name attribute is used within the input tag with a "search" value which will take the value entered by the user. 

```JavaScript

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

```

The value is then passed to the /results route, which gets the value entered by the user with req.query.search which is stored in a variable called query. Since the API is now private an apiKey is now needed to access the data so I stored the key in a variable. The URL string for the API which is concatenated with the query variable and the apiKey variable is stored in a variable called url. This will combine the URL for the API, the value the user enters into the form and the apiKey. 

The request module is now used in the route so the url variable is passed in to request the relevant data and a callback function with object parameters of error to identify if there has been an error, check the response code, and do something with the body. 

If there is no error and response code is ok, the data that is returned is in string format so to adapt that so it is easily accessible, it is parsed using JSON.parse(body) and stored in a variable called data. We then render the results.ejs file and within that file there is a data variable that is passed the data variable in app.js containing the API parsed content. 

In the results.ejs file, we use the ejs syntax <% %> to loop through the data using a forEach getting the movie title and movie year which can be accessed using either [] of movie.Year notation because the data has now been parsed into object format. 

A back button is also used to return to the search page. 

The parameters offered by the API can be more specific, but in this instance a general search paramenter has been used ("?s=").



