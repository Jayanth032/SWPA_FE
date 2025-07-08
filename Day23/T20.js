const prompt = require('prompt-sync')();
let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum += i;
}
console.log("\nSum from 1 to 50:", sum);