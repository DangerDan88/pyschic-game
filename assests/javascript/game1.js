alert("you have 9 guesses to win or lose");

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];


window.onload = function() {
var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  computerGuess.push(compGuess) 
  console.log(computerGuess[0]);

}


document.onkeyup = function(event) {
    var userGuess = event.key
    lettersGuessed.push(userGuess);
    console.log(computerGuess[0]);


    if(userGuess === computerGuess[0] && guessesLeft > 0) {
        wins++;
        computerGuess = [];
        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  computerGuess.push(compGuess) 
  console.log(computerGuess,lettersGuessed,compGuess);
  guessesLeft = 9;
      alert("You win");


    }
    else if(userGuess !== computerGuess[0] && guessesLeft > 0) {
        guessesLeft = guessesLeft-1;
        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    }

    else {
      losses++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  computerGuess.push(compGuess) 
  console.log(computerGuess[0]);
      alert("You lose try again");

    }
    var html = "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses left: " + guessesLeft + "</p>" +
    "<p>Your guesses so far: " + lettersGuessed + "</p>";

document.querySelector("#game").innerHTML = html;

}




