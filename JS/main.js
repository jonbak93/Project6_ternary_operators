function Ride_Function() {      
    var Height, can_Ride;       //creating variables for whether a person is tall enough to ride a ride
    Height = document.getElementById("Height").value;     //connecting JS variable to an HTML element that uses an input value 
    can_Ride = (Height < 52) ? "You are too short" : "You are tall enough";     //ternary operator that gives you feedback on whether you are too tall or short to ride
    document.getElementById("Ride").innerHTML = can_Ride + " to ride.";     //making the element print you are either too short or tall enought to ride the ride

}







function russianNestingDolls() {
    document.getElementById("Nested_Function").innerHTML = neverEnding();     //connecting HTML element to JS 

    function neverEnding() {          //function that returns undefined because there are no numbers in JS in that range
        var rabbitHole = -3E307;

        function russianDollsNesting() {
            return rabbitHole;
        }
    }
}


function Bikes(make, model, color, year) {      //Constructor function that isn't used in this code to display in HTML
    this.bike_make = make;
    this.bike_model = model;
    this.bike_color = color;
    this.bike_year = year;
}


function MuayThai(kick, knee, elbow, punch) {     //Constructor function that shows different techniques in Muay Thai
    this.kick = kick;
    this.knee = knee;
    this.elbow = elbow;
    this.punch = punch;

}

let fighter1 = new MuayThai("Round Kick", "Spear Knee", "Tomahawk", "Jab");   //making a variable for a custom martial artist


function thaiBoxer() {
    document.getElementById("result").innerHTML = "John's favorite kick is the " + fighter1.kick + ", and his favorite elbow technique is the " +
        fighter1.elbow + " elbow.";
}       //using the original constructor function "MuayThai()" to call this function, so it will display in the HTML.
