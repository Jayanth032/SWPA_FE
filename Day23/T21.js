const prompt = require('prompt-sync')();
let num = parseInt(prompt("\nEnter a number to find factorial: "));
let fact = 1;
for (let i = 1; i <= num; i++) {
    fact *= i;
}
console.log(`Factorial of ${num} is ${fact}`);