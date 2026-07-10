const arr = [1, 2, 2, 3, 4, 4, 5, 1];
const arrayAll = [1,'1',2,3,2,4,5,"2","Hello", 'data',0,'0'];
const myObjArr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "C" }
];
//trick 1
//const res = [...new Set(arr)];
//trick 2
//const data = arr.filter((item, index)=> arr.indexOf(item) === index);
//console.log("data", data);
const seen = {};
const mix = new Map();
const result = [];
const res=[];

//trick 3
// for(let i = 0 ; i<arr.length; i++){
//     if(!result.includes(arr[i])){
//         result.push(arr[i]);
//     }
// }

//trick 4
// for(let i = 0; i<arr.length; i++){

//     current = arr[i];
//     if(seen[current] === undefined){
//         result.push(current);
//         seen[current] = true
//     }  
// }


//trick 5
// for(let i =0; i<arrayAll.length; i++){
//     if(!mix.has(arrayAll[i])){
//         res.push(arrayAll[i])
//         mix.set(arrayAll[i], true);
//     }
// }

//trick 6

for(let i = 0; i<myObjArr.length; i++){
    if(!mix.has(myObjArr[i].id)){
        res.push(myObjArr[i])
        mix.set(myObjArr[i].id, true);


    }
}
  
console.log("result", res);