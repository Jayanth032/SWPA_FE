// 11
let nums = [5, 10, 15];
nums.push(25);
console.log(nums);

// 12
let removed = nums.pop();
console.log("Removed:", removed);

// 13
nums.unshift(0);
console.log(nums);

// 14
let shifted = nums.shift();
console.log("Shifted:", shifted);

// 15
console.log("Length:", nums.length);

// 16
function addIfNotExists(arr, item) {
  if (!arr.includes(item)) {
    arr.push(item);
  }
  return arr;
}
console.log(addIfNotExists(["cat", "dog"], "dog"));  
console.log(addIfNotExists(["cat", "dog"], "fish")); 

// 17
let toReverse = [1, 2, 3];
toReverse.reverse();
console.log(toReverse);

// 18
let toSort = [5, 2, 9, 1];
toSort.sort((a, b) => a - b);
console.log(toSort);

// 19
let animals = ["dog", "cat", "parrot", "hamster"];
animals.splice(1, 2); 
console.log(animals);

// 20
let letters = ["a", "b", "c", "d", "e"];
let sliced = letters.slice(1, 4); 
console.log(sliced);
