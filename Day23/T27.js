const prompt = require('prompt-sync')();
let person = {
    name: "Jayanth",
    age: 21,
    city: "Chennai"
};
console.log("\nObject Properties:");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}