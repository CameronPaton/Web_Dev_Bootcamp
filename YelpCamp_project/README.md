## Web Developer Bootcamp Project 4

### Yelpcamp Project

---

##### Project Overview

The Yelpcamp project is from the second half of the Udemy Web Developer Bootcamp course, by Colt Steele. The purpose of the project is to introduce Back End concepts and apply the concepts to a project. This project is a full stack project which uses Express, Node and MongoDB. 

The site is of Campgrounds where users are able to add a Campground to promote it, add a price, image and description of the campground and it is then added to the database which stores the data. So instead of using an array to store data that is lost when the page refreshes, this project introduces data persistence where the data is persistent. 

Visitors can see all the campgrounds added to the database, but they cannot interact with the site unless they register their details. 

Users are able to add a new campground, edit or delete the campground, but cannot edit or delete campgrounds added by other users. The user must be logged in to add, edit or delete a campground. 

Users are able to add comments to campgrounds and can edit or delete their comments, but can't edit or delete comments added by other users. Users cannot add comments unless they are logged in. 

There is a landing page, which has a full screen image that fades out after 5 seconds and the next photo fades in. There is a button that takes the visitor to show all the campgrounds. 

---

##### Technologies

* Express
* Node
* MongoDB
* NPM
* Authentication
* PassportJS
* Authorisation

---

##### Functionality

The initial set up of the site involved installation of Express and EJS using npm which were saved to the package.json file as dependencies. The app.js file stores the configuration for the site where packages that have been installed are required and stored in variables. The site has required Express which is a server side framwork for NodeJS, which allows for JavaScript to be written at server side rather than in the browser. Due to the use of forms in this site to add new campgrounds and comments, Body Parser has been required. Mongoose has been installed due to the use of MongoDB. Flash is for the feedback messages which display if there is an error or success, PassportJS is for authentication of users. Method Override is required because of the use of PUT requests and DELETE which can only be sent as POST requests and overridden as PUT and DELETE requests. These installations are then used, and the server is also started from this file.

The models which store the structure of the database collections, are required in the app.js file also. There are three models to store data, one is for the addition of new campgrounds, one is the addition of new comments, and one for the addition of new users.

There are also three routes files, one for campgrounds, one for comments and one for users called index.js. These routes consist of the GET request route to the forms to add new items or update existing items, and using method_override to change them from a POST request to a PUT request in the form. They also receive the data input from the users in POST requests and deal with the logic of adding the form input to the database. The index.js file handles the routes when a user makes a GET request to register, login or logout. 

The pages that are rendered from the routes are EJS templates, and these templates contain partials which is the standard boilerplate HTML head content and navigation. The EJS templates are stored in the views folder which contains a folder for campgrounds and one for comments. Campground ejs files display the forms to add a new campground and edit an existing campground. The show page displays more details about a specific campground and takes the object id that has been clicked on to render the correct campground. 

Comments are rendered through the show page, but there are edit and new ejs forms to add a new comment or edit an existing one. 

Authentication of the user is handled using PassportJS and authorisations are handled using middleware, which checks if the current user is logged in, owns a campground or owns a comment. 

---

##### Preview

![preview]()

---

##### Live Application

Please click the link icon below to view the live application:

[:link: Yelpcamp Application]()
