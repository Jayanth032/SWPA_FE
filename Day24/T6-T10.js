// 6
let greetExpr = function() {
  console.log("Hello from a function expression!");
};

// 7
let squareExpr = function(num) {
  return num * num;
};

// 8
let areaRectangle = function(length, width) {
  return length * width;
};

// 9
let isPalindrome = function(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
};

// 10
let reverseString = function(str) {
  return str.split("").reverse().join("");
};
