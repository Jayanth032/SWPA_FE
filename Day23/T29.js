const prompt = require('prompt-sync')();
let toReverse = prompt("\nEnter a string to reverse: ");
let reversed = "";
for (let i = toReverse.length - 1; i >= 0; i--) {
    reversed += toReverse[i];
}
console.log("Reversed string:", reversed);