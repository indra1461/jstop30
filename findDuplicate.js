const arr = [1, 2, 2, 4, 5, 3, 7, 3, 2, 1];
function findDuplicate(arr) {
  const frequency = {};
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    frequency[cur] = (frequency[cur] || 0) + 1;
  }
  //how to find duplicate values in an array

  for (let freq in frequency) {
    if (frequency[freq] > 1) {
      duplicates.push(Number(freq));
    }
  }
  return duplicates;
}

const duplicates = findDuplicate(arr);
console.log(duplicates);
