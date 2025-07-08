const prompt = require('prompt-sync')();
let str = prompt("\nEnter a string: ");
let index = 0;
console.log("Characters in the string:");
while (index < str.length) {
    console.log(str[index]);
    index++;
}