var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Salmon Creek", 
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description: "Lorem ipsum dolor sit amet, eam ut legere salutatus quaerendum, est inani novum definitionem an, vis ne vide vocent probatus. Est duis maiorum et, verear epicurei referrentur est ea. Ea probo audire salutatus vix, paulo impedit senserit nec in, cu eos sumo mutat reformidans. Laudem putent pri id"
    },
    {
        name: "Granite Hill", 
        image: "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description: "Lorem ipsum dolor sit amet, eam ut legere salutatus quaerendum, est inani novum definitionem an, vis ne vide vocent probatus. Est duis maiorum et, verear epicurei referrentur est ea. Ea probo audire salutatus vix, paulo impedit senserit nec in, cu eos sumo mutat reformidans. Laudem putent pri id"
    },
    {
        name: "Mountain Goats Rest", 
        image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=698&q=80",
        description: "Lorem ipsum dolor sit amet, eam ut legere salutatus quaerendum, est inani novum definitionem an, vis ne vide vocent probatus. Est duis maiorum et, verear epicurei referrentur est ea. Ea probo audire salutatus vix, paulo impedit senserit nec in, cu eos sumo mutat reformidans. Laudem putent pri id"
    }
]


//REMOVE ALL CAMPGROUNDS
function seedDB(){
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } 
            console.log("Removed campgrounds");
            Comment.remove({}, function(err){
                if(err){
                    console.log(err);
                }
                    console.log("Removed Comments!");
                

//ADD A FEW CAMPGROUNDS
    data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err){
                console.log(err);
            } else {
                console.log("Added a campground!");
                //ADD A FEW COMMENTS
                Comment.create(
                    {
                    text: "This is a test comment 1",
                    author: "Tom Sawyer"
                }, function(err, comment){
                    if(err){
                        console.log(err);
                    } else {
                        campground.comments.push(comment);
                        campground.save();
                        console.log("Created new comment");
                        }
                    });
                }
            });
    });

    });
    });
}


module.exports = seedDB;
