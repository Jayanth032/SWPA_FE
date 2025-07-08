const prompt = require('prompt-sync')();
let nums = [34, 78, 2, 90, 17];
let max = nums[0];
for (let n of nums) {
    if (n > max) max = n;
}
console.log("\nMaximum number is:", max);
