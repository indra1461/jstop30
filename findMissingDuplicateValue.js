const arr = [1, 2, 2, 4, 5];
const freq = {}
let missing;
let duplicate;

for(let i = 0 ; i< arr.length; i++){
    let cur = arr[i];
    if(freq[cur] === undefined){
        freq[cur] = 1;

    }else {
        freq[cur] = freq[cur] + 1;
    }
}

for(let i = 1; i<= arr.length; i++){
    if(freq[i] === undefined){
        missing = i
    }
    
    if(freq[i] > 1){
        duplicate = i
    }
}

console.log("missing", missing);
console.log("duplicate", duplicate);