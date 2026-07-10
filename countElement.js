// const arr = [1, 2, 2, 3, 1, 1, 4];
const arr = [1, "1", true, "true"];
const users = [
  { id: 1, role: "admin" },
  { id: 2, role: "user" },
  { id: 3, role: "admin" },
  { id: 4, role: "user" },
  { id: 5, role: "admin" }
];

let freq = {};
let mix = new Map()


// for(let i = 0; i < arr.length;i++){
//     let current = arr[i];

//     if(freq[current] === undefined){
//         freq[current] = 1;
//     }else{

//         freq[current] = freq[current] + 1;
//     }

// }

// for(let i = 0; i<arr.length;i++){
//     if(!mix.has(arr[i])){
//          mix.set(arr[i], 1);  //set(value, 1)
//     }else{
//         mix.set(arr[i], mix.get(arr[i]) + 1);  //get old count + 1
//     }
// }

for(let i = 0; i < users.length;i++){
    if(!mix.has(users[i].role)){
        mix.set(users[i].role, 1)
    }else{
        mix.set(users[i].role, mix.get(users[i].role) + 1)
    }
}

console.log(mix);