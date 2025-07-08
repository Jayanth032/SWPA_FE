const prompt = require('prompt-sync')();
let vs = prompt("\nEnter a string to count vowels: ").toLowerCase();
let Count = 0;
for (let ch of vs) {
    if ("aeiou".includes(ch)) {
        Count++;
    }
}
console.log("Number of vowels:", Count);