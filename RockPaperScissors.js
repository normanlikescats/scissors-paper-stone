var gamesWon = 0;
var gamesPlayed = 0;
var userName = " ";
var gameState = "nameInput";

var main = function (input) {
  // Check Game Mode
  if (gameState === "nameInput") {
    userName = input;
    gameState = "gameTime";
    return "gm, " + userName + "! Welcome to the game!";
  } else {
    //Validate input is string
    if (typeof input === "string") {
      if (
        input.toLowerCase() === "rock" ||
        input.toLowerCase() === "paper" ||
        input.toLowerCase() === "scissors"
      ) {
        var outputValue = winOrLose(input.toLowerCase());
        console.log(outputValue);
        return outputValue;
      } else {
        return "Please input only rock, paper or scissors.";
      }
    }
  }
  var ouputValue = winOrLose(input);
  return ouputValue;
};

//Function for the actual game
var winOrLose = function (userAction) {
  var cpuAction = computerAction();
  var myOutputValue = " ";
  gamesPlayed++;
  //User selects rock
  if (userAction === "rock") {
    if (cpuAction === "rock") {
      // Computer selects rock
      myOutputValue = "The computer played " + cpuAction + ". It's a tie!";
    } else if (cpuAction === "scissors") {
      // Computer selects scissors
      myOutputValue = "The computer played " + cpuAction + ". You won!";
      gamesWon++;
    } else if (cpuAction === "paper") {
      // Computer selects paper
      myOutputValue = "The computer played " + cpuAction + ". You lost!";
    }
  } else if (userAction === "paper") {
    //User selects paper
    if (cpuAction === "rock") {
      // Computer selects rock
      myOutputValue = "The computer played " + cpuAction + ". You won!";
      gamesWon++;
    } else if (cpuAction === "scissors") {
      // Computer selects scissors
      myOutputValue = "The computer played " + cpuAction + ". You lost!";
    } else if (cpuAction === "paper") {
      // Computer selects paper
      myOutputValue = "The computer played " + cpuAction + ". It's a tie!";
    }
  } else if (userAction === "scissors") {
    //User selects scissors
    if (cpuAction === "rock") {
      // Computer selects rock
      myOutputValue = "The computer played " + cpuAction + ". You lost!";
    } else if (cpuAction === "scissors") {
      // Computer selects scissors
      myOutputValue = "The computer played " + cpuAction + ". It's a tie!";
    } else if (cpuAction === "paper") {
      // Computer selects paper
      myOutputValue = "The computer played " + cpuAction + ". You won!";
      gamesWon++;
    }
  }
  return (
    "You played " +
    userAction +
    ". " +
    myOutputValue +
    "\n Your win rate is " +
    //Compute win rate, rounded to 2 dp
    Math.round((gamesWon / gamesPlayed) * 100 * 100) / 100 +
    "%."
  );
};

//Function to choose action for computer
var computerAction = function () {
  var possibleActions = ["rock", "paper", "scissors"];
  computerMove =
    possibleActions[Math.floor(Math.random() * possibleActions.length)];
  return computerMove;
};
