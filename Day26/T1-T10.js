// 1
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);

// 2
let colors = ["Blue", "Green", "Red"];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

// 3
let fruits = [];
fruits[0] = "Apple";
fruits[1] = "Banana";
console.log(fruits);

// 4
let mixed = ["Jayanth", 21, true, null];
console.log("Length:", mixed.length);

// 5
let last = numbers[numbers.length - 1];
console.log("Last element:", last);

// 6
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 7
let fList = ["Mango", "Orange", "Pineapple"];
for (let f of fList) {
  console.log(f);
}

// 8
console.log(typeof fList);               
console.log(Array.isArray(fList));       

// 9
let matrix = [[1, 2], [3, 4]];
console.log(matrix[1][0]); // 3

// 10
let nums = [5, 10, 15];
nums[1] = 20;
console.log(nums); // [5, 20, 15]
