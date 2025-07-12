// 1
function greet() {
  console.log("Hello, World!");
}

// 2
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

// 3
function square(num) {
  return num * num;
}

// 4
function isEven(num) {
  return num % 2 === 0;
}

// 5
function checkAge(age) {
  return age >= 18 ? "Adult" : "Minor";
}
greet();
sayHello("Jayanth");
console.log("Square of 4:", square(4));
console.log("Is 6 even?", isEven(6));
console.log("Age 17 is:", checkAge(17));