const arr1 = [1, 2, 2, 3, 4];
const arr2 = [2, 2, 4, 5];
const set = new Set(arr1);
const result = [];

for(let i = 0 ; i<arr2.length;i++){
    let cur = arr2[i];
    if(set.has(cur)){
        result.push(cur);
        set.delete(cur);
    }
    
    }

    console.log(result);
