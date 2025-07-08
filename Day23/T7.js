const prompt = require('prompt-sync')();
let number = parseInt(prompt("Enter a number: "));
if (number % 3 === 0 && number % 5 === 0) {
    console.log("Divisible by both 3 and 5.");
} else {
    console.log("Not divisible by both 3 and 5.");
}