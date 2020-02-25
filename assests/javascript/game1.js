alert("you have 9 guesses to win or lose");

let computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

let wins = 0;
let losses = 0;
let guessesLeft = 9;
let lettersGuessed = [];
let computerGuess = [];

window.onload = function() {
  let compGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  computerGuess.push(compGuess);
  console.log(computerGuess[0]);
};

document.onkeyup = function(event) {
  let userGuess = event.key;
  lettersGuessed.push(userGuess);
  console.log(computerGuess[0]);

  if (userGuess === computerGuess[0] && guessesLeft > 0) {
    wins++;
    computerGuess = [];
    let compGuess =
      computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(compGuess);
    console.log(computerGuess, lettersGuessed, compGuess);
    guessesLeft = 9;
    alert("You win");
  } else if (userGuess !== computerGuess[0] && guessesLeft > 0) {
    guessesLeft = guessesLeft - 1;
    let compGuess =
      computerChoices[Math.floor(Math.random() * computerChoices.length)];
  } else {
    losses++;
    guessesLeft = 9;
    lettersGuessed.length = 0;
    computerGuess.length = 0;
    let compGuess =
      computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(compGuess);
    console.log(computerGuess[0]);
    alert("You lose try again");
  }
  let html =
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Wins: " +
    wins +
    "</p>" +
    "<p>Losses: " +
    losses +
    "</p>" +
    "<p>Guesses left: " +
    guessesLeft +
    "</p>" +
    "<p>Your guesses so far: " +
    lettersGuessed +
    "</p>";

  document.querySelector("#game").innerHTML = html;
};
