const arr = [1, 2, 3, 4, 5, 6, 7];

//trick1 Two Pointer approach
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

// trick2 using Extra Array
function reverseArrayReverse(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

//trick3 using recursive function
function recursiveReverse(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return arr;
  }
  [arr[start], arr[end]] = [arr[end], arr[start]];
  return recursiveReverse(arr, start + 1, end - 1);
}

console.log(reverseArray(arr)); // [7, 6, 5, 4, 3, 2, 1]
console.log(reverseArrayReverse(arr)); // [7, 6, 5, 4, 3, 2, 1]
console.log(recursiveReverse(arr)); // [7, 6, 5, 4, 3, 2, 1]
