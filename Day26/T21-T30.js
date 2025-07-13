// 21
let numsMap = [1, 2, 3];
let doubled = numsMap.map(num => num * 2);
console.log(doubled);

// 22
let numsFilter = [1, 2, 3, 4, 5, 6];
let evens = numsFilter.filter(num => num % 2 === 0);
console.log(evens);

// 23
let sum = numsFilter.reduce((total, curr) => total + curr, 0);
console.log("Sum:", sum);

// 24
let bigNum = [10, 20, 55, 60];
let found = bigNum.find(n => n > 50);
console.log("First > 50:", found);

// 25
let fruitsArr = ["apple", "banana", "grape"];
console.log(fruitsArr.includes("banana")); 

// 26
console.log(fruitsArr.indexOf("apple")); // 0

// 27
let words = ["JavaScript", "is", "awesome"];
console.log(words.join(" "));

// 28
let checkNums = [1, 2, 3];
console.log(checkNums.every(n => typeof n === "number")); 

// 29
let someNegative = [1, -2, 3];
console.log(someNegative.some(n => n < 0)); 

// 30
let a1 = [1, 2];
let a2 = [3, 4];
let combined = a1.concat(a2);
let spreadCombined = [...a1, ...a2];
console.log("Concat:", combined);
console.log("Spread:", spreadCombined);
