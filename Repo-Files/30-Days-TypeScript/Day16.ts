// Day 16 of 30 Day Challenge

// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function sumAllPositives(numArr: number[]): number {
  return numArr.length > 0
    ? numArr.filter((el) => el > 0).reduce((a, b) => a + b)
    : 0;
}

console.log(sumAllPositives([1, -4, 7, 12])); // 20
console.log(sumAllPositives([])); // 0
