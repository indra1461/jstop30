const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" }
];
const result = {};

for(let i = 0; i < users.length;i++){
    result[users[i].id] = users[i]
}

console.log(result);