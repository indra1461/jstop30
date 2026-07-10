// const arr = [1, [2, [3, 4]], 5];
function Flatten(arr){

let result =[];
//trick 1
// for (let i = 0;i < arr.length;i++){
//     if(Array.isArray(arr[i])){
//       const nestedResult =  Flatten(arr[i]);
//       result.push(...nestedResult);
//     }else{
//         result.push(arr[i]);
//     }
// }
// return result;



//trick 2 without recurssion method
let stack =  [...arr];

while (stack.length > 0) {
    let item = stack.pop();
    if(Array.isArray(item)) {
        stack.push(...item);
    }else{
        result.push(item);
    }

}
return result.reverse();

}



console.log(Flatten([1, [2, [3, 4]], 5]));