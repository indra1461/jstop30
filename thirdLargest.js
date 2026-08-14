const arr = [-10, -5, -20, 45];

let largest = -Infinity;
let secondLargest = -Infinity;
let thirdLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  let current = arr[i];

  if (current > largest) {
    thirdLargest = secondLargest;
    secondLargest = largest;
    largest = current;
  } else if (current > secondLargest && current !== largest) {
    thirdLargest = secondLargest;
    secondLargest = current;
  } else if (
    current > thirdLargest &&
    current !== secondLargest &&
    current !== largest
  ) {
    thirdLargest = current;
  }
}

console.log("1st Largest:", largest);
console.log("2nd Largest:", secondLargest);
console.log("3rd Largest:", thirdLargest);
