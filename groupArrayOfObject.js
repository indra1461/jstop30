const users = [
  { name: "A", role: "admin" },
  { name: "B", role: "user" },
  { name: "C", role: "admin" },
];
const result = {};

// for(let index in users) {
//     const item = users[index]
//     const key = item.role
//     if(result[key] === undefined){
//         result[key] = []
//     }
//     result[key].push(item)
// }

for (let i = 0; i < users.length; i++) {
  let cur = users[i];
  let key = cur.role;
  if (result[key] === undefined) {
    result[key] = [];
  }
  result[key].push(cur);
}

console.log(result);
