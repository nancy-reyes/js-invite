"use strict";

class Invitation {
    // Right now 'displayElement' is equal to <div id="invite-display"></div>
    constructor(displayElement){
        // Below the class is adding HTML string to the object upon creation
        displayElement.append(`<img id="image">
                              <h1 id="title"></h1>
                              <p id="date"></p>
                              <p id="start"></p>
                              <p id="end"></p>
                              <p id="location"> </p>
                              <p id="description"></p>`);

        // Set properties on the class
        this.container = displayElement;
        this.imageEl = displayElement.children("img#image");
        this.titleEl = displayElement.children("h1#title");
        this.dateEl = displayElement.children("p#date");
        this.startEl = displayElement.children("p#start");
        this.endEl = displayElement.children("p#end");
        this.locationEl = displayElement.children("p#location");
        this.descriptionEl = displayElement.children("p#description");

    }

    changeTitle(newTitle){
        this.titleEl.text(newTitle);

    }

    changeDate(newDate) {
        this.dateEl.text("Join us on " + newDate);
    }

    changeStart(newStart) {
        this.startEl.text(newStart);
    }

    changeEnd(newEnd) {
        this.endEl.text(newEnd);
    }

    changeImage(newImage){
        this.imageEl.attr("src", newImage);
    }

    changeFont(newFont) {
        this.container.css("font-family", newFont);
    }

    // Add more methods here
    changeLocation(newLocation) {
        this.locationEl.text(newLocation);
    }

    changeDescription(newDescription) {
        this.descriptionEl.text(newDescription);
    }

    changeBackgroundColor(newBackgroundColor) {
        this.container.css("background-color", newBackgroundColor);
    }
 

}


// PART 2:

// Create your invitation object
let invitationElement = $("#invite-display");
let invitation = new Invitation(invitationElement);

// Add event listeners
// using JQuery to get what the user has entered in the form.

$("#title-input").on('keyup', function(evt) {
    invitation.changeTitle($("#title-input").val());
});

$("#date-input").on('keyup', function(evt) {
    invitation.changeDate($("#date-input").val());
});

$("#start-input").on('change', function(evt) {
    invitation.changeStart($("#start-time").val());
});

$("#end-input").on('keyup', function(evt) {
    invitation.changeEnd($("#end-time").val());
});

$("#description-input").on('keyup', function(evt) {
    invitation.changeDescription($("#description-input").val());
});

$("#location-input").on('keyup', function(evt) {
    invitation.changeLocation($("#location-input").val());
});

$("#font").on('change', function(evt) {
    invitation.changeFont($("#font").val());
});


$("#container").on('click', function(evt) {
    invitation.changeBackgroundColor($("".data());
});
`   1