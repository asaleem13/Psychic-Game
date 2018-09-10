

let wins = 0;
let losses = 0;
let guessesLeft = 9;
let guessedLetters = [];
let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var userChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];    

    if (userChoice.indexOf(userGuess) > -1) {
        if (userGuess === computerGuess) {
            wins++;
            guessesLeft = 9;
            guessedLetters = []

        }

        if(userGuess != computerGuess) {
            guessesLeft--;
            guessedLetters.push(userGuess);
        }

        if (guessesLeft === 0) {
            guessesLeft = 9;
            losses++;
            guessedLetters = []
        }


        document.querySelector("#win3").innerHTML = wins;
        document.querySelector("#loss3").innerHTML = losses;
        document.querySelector("#guess3").innerHTML = guessesLeft;
        document.querySelector("#guesssofar3").innerHTML = guessedLetters.join(", ");


    }
}
    





