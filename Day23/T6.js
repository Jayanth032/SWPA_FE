const prompt = require('prompt-sync')();
let mark = parseInt(prompt("Enter your mark: "));
if (mark >= 90) {
    console.log("Grade: A");
} else if (mark >= 75) {
    console.log("Grade: B");
} else if (mark >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}