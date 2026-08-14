const arr = [0, 1, 3, 4];
const n = arr.length;
const expectedSum = (n * (n + 1)) / 2;
let actualSum = 0;

for (let i = 0; i < arr.length; i++) {
  actualSum += arr[i];
}
let result = expectedSum - actualSum;

console.log(result);
