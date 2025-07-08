const prompt = require('prompt-sync')(); 
let number = prompt("Enter a number:");
number = Number(number);

if (isNaN(number)) {
  console.log("Invalid input. Please enter a valid number.");
} else if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}
