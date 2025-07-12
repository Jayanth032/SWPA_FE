// 21
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// 22
function maxOfThree(a, b, c) {
  return Math.max(a, b, c);
}

// 23
function multiplyOrAdd(a, b, operation) {
  return operation === "multiply" ? a * b : a + b;
}

// 24
function includesJS(str) {
  return str.includes("JS");
}

// 25
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
