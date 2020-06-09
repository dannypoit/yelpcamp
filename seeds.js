var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Wekiwa Springs State Park Campground",
    image: "https://lh5.googleusercontent.com/p/AF1QipMFQoY9vzTwLxirT5rwXOoliKqh6dfT7G6NblUn=w408-h306-k-no",
    description: "Pretty park, cool springs for swimming (gets busy quickly). Bathhouses can use a little of attention but when we mentioned something they were very attentive. We saw plenty of turtles and turkeys!"
  },  
  {
    name: "Kelly Park Campground",
    image: "https://lh5.googleusercontent.com/p/AF1QipNHFhN80n6E_50L_0egVX36EVWm8QT9ZQ7frL2o=w426-h240-k-no",
    description: "Awesome place ill be back again super chill and its a popular spot in summer Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque vel, tempore eligendi architecto itaque exercitationem harum ipsum praesentium, explicabo earum? Veniam, totam aliquam blanditiis laudantium quas animi quisquam ad?"
  },  
  {
    name: "Big Fork Campsite",
    image: "https://lh5.googleusercontent.com/p/AF1QipP8ClL3i97q63w1y8GQ6Fb_GpQ-ex3Ppkcomn_d=w408-h306-k-no",
    description: "E Ponkan Rd, Apopka, FL 32712 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque vel, tempore eligendi architecto itaque exercitationem harum ipsum praesentium, explicabo earum? Veniam, totam aliquam blanditiis laudantium quas animi quisquam ad?"
  }
]

function seedDB(){
  // remove all campgrounds
  Campground.deleteMany({}, function(err){
    if(err){
      console.log(err);
    }
    console.log("removed campgrounds!");
    // add a few campgrounds
    data.forEach(function(seed){
      Campground.create(seed, function(err, campground){
        if(err){
          console.log(err);
        } else {
          console.log("added a campground");
          // create a comment
          Comment.create(
            {
              text: "This place is great, but I wish there was internet.",
              author: "Homer"
            }, function(err, comment){
              if(err){
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log("created new comment");
              }
            }
          );
        }
      });
    });
  });
}

module.exports = seedDB;