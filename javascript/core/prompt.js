const readlineSync = require('readline-sync');
let prompt = (s) => readlineSync.question(s);
let userInput = prompt("Enter a number greater than 10:");

while (userInput <= 10 || isNaN(userInput)) {
  userInput = prompt("Invalid input. Please enter a number greater than 10:");
}

console.log("Thank you! You entered:", userInput);

let option;

do {
  console.log("1. Start Game");
  console.log("2. Load Game");
  console.log("3. Quit");

  option = prompt("Choose an option (1-3):");

  switch(option) {
    case '1':
      console.log("Starting new game...");
      break;
    case '2':
      console.log("Loading saved game...");
      break;
    case '3':
      console.log("Quitting...");
      break;
    default:
      console.log("Invalid option. Try again.");
  }
} while (option !== '3');

console.log("Goodbye!");