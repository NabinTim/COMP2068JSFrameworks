const prompt = require('prompt');

// Start the prompt module
prompt.start();

// Ask the user to choose Rock, Paper, or Scissors
prompt.get(['choice'], function (err, result) {
    if (err) {
        console.log(err);
        return;
    }

    // Normalize the user's input to uppercase
    let userChoice = result.choice.toUpperCase();

    // Generate a random choice for the computer
    let random = Math.random();
    let computerChoice;

    if (random <= 0.34) {
        computerChoice = "PAPER";
    } else if (random <= 0.67) {
        computerChoice = "SCISSORS";
    } else {
        computerChoice = "ROCK";
    }

    // Display both choices
    console.log(`Your choice: ${userChoice}`);
    console.log(`Computer's choice: ${computerChoice}`);

    // Determine the winner
    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (userChoice === "PAPER" && computerChoice === "ROCK") ||
        (userChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        console.log("You won!");
    } else {
        console.log("Computer won!");
    }
});
