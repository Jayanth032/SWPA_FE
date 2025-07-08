const prompt = require('prompt-sync')();
let str1 = prompt("Enter first string: ");
let str2 = prompt("Enter second string: ");
if (str1.toLowerCase() === str2.toLowerCase()) {
    console.log("Strings are equal (case-insensitive).");
} else {
    console.log("Strings are not equal.");
}