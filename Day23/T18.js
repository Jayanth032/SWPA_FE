const prompt = require('prompt-sync')();
console.log("\nOdd numbers from 1 to 20:");
let j = 1;
while (j <= 20) {
    if (j % 2 !== 0) {
        console.log(j);
    }
    j++;
}