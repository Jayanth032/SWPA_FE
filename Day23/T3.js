const prompt = require('prompt-sync')();

let age = parseInt(prompt("Enter your age: "));
if (age < 18) {
    console.log("minor.");
} else if (age < 60) {
    console.log("adult.");
} else {
    console.log("senior citizen.");
}