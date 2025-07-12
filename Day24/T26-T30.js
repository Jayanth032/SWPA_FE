// 26 
let globalVar = "I'm global";
function useGlobal() {
  console.log(globalVar);
}

// 27 
function defineLocal() {
  let localVar = "I'm local";
  console.log(localVar);
}


// 28 
function countRuns() {
  let count = 0;
  count++;
  console.log("Run count:", count);
}

// 29 
function firstFunc() {
  let name = "Alice";
  console.log("First function:", name);
}
function secondFunc() {
  let name = "Bob";
  console.log("Second function:", name);
}

// 30 
let number = 10;
function modifyGlobal() {
  number += 5;
}
console.log("Before:", number);
modifyGlobal();
console.log("After:", number);
