const arr = [-10, -5, -20];
let largest = -Infinity;
let secondLargest = -Infinity;

for(let i = 0 ; i<arr.length; i++){
    let current = arr[i];
    if(current > largest){
        secondLargest = largest;
        largest = current;
    }else if(current > secondLargest && current != largest){
        secondLargest =current;
    }
}

console.log(secondLargest)