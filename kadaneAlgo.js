function maxSubArr(arr) {
  let currentSum = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // Rule 1: Kya purane total ke sath judna faydemand hai,
    // ya yahin se NAYI shuruat karein?

    if (currentSum + arr[i] > arr[i]) {
      currentSum += arr[i]; // Purane me jud jao
    } else {
      currentSum = arr[i]; // Purana loss bhool kar yahin se nayi shuruat karo!
    }
    // Rule 2: Check karo ki kya naya sum ab tak ke maximum se bada hai?
    if (currentSum > maxSum) {
      maxSum = currentSum; // Agar haan, toh record update kar do
    }
  }
  return maxSum; // Aakhri sabse bada sum return kar do
}

// Test karke dekho:
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// Output: 6 (Kyunki [4, -1, 2, 1] ka sum 6 hota hai)
