// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

var userChoice = "";
var computerChoice = "";
var winner = "";
var computerScore = 0;
var point = 1;
var myPoint = 0;
function updateTeams(){
    $("#myPoints").text(myPoint);
    $("#computerPoints").text(computerScore);
}

$("button").click(function() {
    var randomNumber= Math.random();
   $("#userChoice").text(userChoice);
   userChoice = $("#input").val ();
    if (randomNumber <1 && randomNumber> 0.66) {
        $("#computerChoice").html(computerChoice);
        computerChoice = "rock";
}
    else if ( randomNumber <0.66 && randomNumber >0.33) {
        $("#computerChoice").html(computerChoice);
        computerChoice = "paper";
}
    else {
        $("#computerChoice").html(computerChoice);
        computerChoice="scissors";
}
    if (userChoice === "rock" && computerChoice === "scissors") {
        $("#winner").html("User Wins!");
        myPoint += point;
    }
    else if (userChoice === "rock" && computerChoice === "paper") {
        $("#winner").html("Computer Wins!");
        computerScore += point;
    }
    else if (userChoice === "paper" && computerChoice === "rock") {
        $("#winner").html("User Wins!");
        myPoint += point;
    }
    else if (userChoice === "paper" && computerChoice === "scissors") {
        $("#winner").html("Computer Wins!");
        computerScore += point;
    }
    else if (userChoice === "scissors" && computerChoice === "rock") {
        $("#winner").html("Computer Wins!");
        computerScore += point;
    }
    else if (userChoice === "scissors" && computerChoice === "paper") {
        $("#winner").html("User Wins!");
        myPoint += point;
    }
    else if (userChoice === computerChoice) {
        $("#winner").html("It's a draw! Duel again.");
    }
    else {
        $("#winner").html("Choose a real weapon!");
    }
    updateTeams()
});
// DOCUMENT READY FUNCTION BELOW

