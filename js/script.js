// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

var userChoice = "";
var computerChoice = "";
var winner = "";


$("button").click(function() {
    var randomNumber= Math.random();
   $("#userChoice").text(userChoice);
   userChoice = $("#input").val ();
    if (randomNumber <1 && randomNumber> 0.66) {
        $("#computerChoice").html("rock");
    }
    else if ( randomNumber <0.66 && randomNumber >0.33) {
        $("#computerChoice").html("paper");
    }
    else {
        $("#computerChoice").html("scissors");
    }
});
// DOCUMENT READY FUNCTION BELOW

