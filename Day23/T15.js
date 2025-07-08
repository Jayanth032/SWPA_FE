const prompt = require('prompt-sync')();
let rangeNum = parseInt(prompt("Enter a number: "));
if (rangeNum >= 10 && rangeNum <= 100) {
    console.log("Number is within range (10 to 100).");
} else {
    console.log("Number is out of range.");
}