function twoSum(arr, target){

    //trick 1
    // for(let i = 0; i < arr.length;i++){
    //     for(let j = i+1; j < arr.length;j++){
    //         if(arr[i]+arr[j] === target){
    //             return [i,j]
    //         }
    //     }
    // }
    // return []

    //trick 2
    let map = new Map();
    for(let i = 0; i < arr.length; i++){
        let cur = arr[i];
        let needed = target - cur;
        if(map.has(needed)){
            return [map.get(needed), i];
        }
        map.set(cur,i)
    }
}

console.log(twoSum([3,3],6))