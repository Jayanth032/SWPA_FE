const prompt = require('prompt-sync')();
let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));
console.log("Greater number is:", num1 > num2 ? num1 : num2);
