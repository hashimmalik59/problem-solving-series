const nums = [1, NaN, 2, 3, "5"];
let sum = 0; // Accumulator

for (let i = 0; i < nums.length; i++) {
  if (!Number.isNaN(nums[i]) && typeof nums[i] === "number") {
    sum += nums[i];
  }
}

console.log(`Sum of all numbers is: ${sum}`);
