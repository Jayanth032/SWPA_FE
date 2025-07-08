const prompt = require('prompt-sync')();
let str = prompt("Enter a string: ");
if (str.trim() === "") {
    console.log("String is empty.");
} else {
    console.log("String is not empty.");
}
