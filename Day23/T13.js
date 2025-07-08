const prompt = require('prompt-sync')();
let password = prompt("Enter a password: ");
if (password.length >= 8) {
    console.log("Strong password.");
} else {
    console.log("Weak password.");
}