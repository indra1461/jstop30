function maxSubarraySum(arr, k) {
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  let maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    let newValue = arr[i];
    let oldestValue = arr[i - k];
    windowSum += newValue - oldestValue;
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3));
