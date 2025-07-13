const prompt = require('prompt-sync')();

let name = prompt("Enter student name:");
let numSubjects = parseInt(prompt("Enter number of subjects:"));
let marks = [];

for (let i = 0; i < numSubjects; i++) {
  let mark = parseFloat(prompt(`Enter mark for subject ${i + 1}:`));
  marks.push(mark);
}

function Average(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return sum / marks.length;
}

function grade(avg) {
  if (avg >= 90) return "A";
  else if (avg >= 80) return "B";
  else if (avg >= 70) return "C";
  else if (avg >= 60) return "D";
  else return "F";
}

let average = Average(marks);
let gradeValue = grade(average);

console.log("\n--- Student Result ---");
console.log("Name:", name);
console.log("Marks:", marks);
console.log("Average:", average.toFixed(2));
console.log("Grade:", gradeValue);
