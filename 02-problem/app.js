const nums = [undefined, "10", NaN, 7, 2, 10, "abc"];

let largeNum;

for (let i = 0; i < nums.length; i++) {
  if (!Number.isNaN(nums[i]) && typeof nums[i] === "number") {
    largeNum = nums[i];
    break;
  }
  if (largeNum < nums[i]) {
    largeNum = nums[i];
  }
}

console.log(`In nums array the largest number is: ${nums} | ${largeNum}`);
