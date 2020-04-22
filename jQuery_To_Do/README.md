## Web Developer Bootcamp Project 2

### To Do List Project

---

##### Project Overview

The To Do List project is from Section 20 of the Udemy Web Developer Bootcamp course, by Colt Steele. This project is a code along project making use of jQuery and applying some new CSS concepts. 

There were several useful learning points, including the application of the 'this' keyword, and the difference between a 'click' event and an 'on' event listener. If the click event is added it will only apply to the existing lis, but if on click is used on the ul with an argument of li (when the user clicks an li within the ul) then this will apply to any future lis added by the user. 

Another useful learning point from this project was when the user adds a new to do, the event listener is a keypress event. The code for this event is shown below:

```Javascript

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        //grabbing new to do text from input
       var todotext = $(this).val();
       $(this).val("");
       //create a new li and add to ul
       $("ul").append("<li><span><i class='fa fa-trash'></i> </span> " + todotext + "</li>");    
    }
});

```

This allowed the application of the 'which' keyword in order to select === 13 which represents the 'enter' key. The var todotext then grabs the input value by the user and resets the input box to an empty string, and a new li is appended to the UL with a span and the content of the li is grabbed from the todotext variable. 

---

##### Technologies

* HTML
* CSS
* jQuery

---

##### Functionality

The To Do List is within a container div with a header that has a + taken from Font Awesome which acts as a button. The button fadeToggles the input box where the user can add a new to do. When a user inputs a new to do it is added to the ul as a new li. The li includes a span which contains a rubbish bin from Font Awesome that provides the option to delete the full li. 
  
The user can also click on the li itself which toggles a css class, greying out the to do and adding a line-through. The span has an animation where if the user hovers over the li it adds to the span a width of 40px revealing the rubbish bin delete item button, but when the li isn't hovered over, that width is reduced to 0px to hide the delete button, and this also includes a transition effect of 0.2s. 

I made some minor changes along the way, such as the background gradient and using different To Do items and a different h1. 

---

##### Preview

![preview](https://github.com/CameronPaton/Images-Portfolio/blob/master/to_do_list_app.png?raw=true)

---

##### Live Application

Please click the link icon below to view the live application:

[:link: To Do Application](https://codepen.io/CyberTiger008/full/zYvqaoq)
