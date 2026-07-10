function rotateArray(arr, k) {
  k = k % arr.length;

  const last = arr.slice(-k);
  const first = arr.slice(0, arr.length - k);

  return [...last, ...first];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
// [4, 5, 1, 2, 3]