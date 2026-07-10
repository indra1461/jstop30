const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

const details = [
  { id: 1, age: 30 },
  
];

// const result = [...details, ...users];
const lookup = {};
const result = [];

for(let i = 0; i < details.length;i++){
    lookup[details[i].id] = details[i];
   
}
for(let i = 0 ; i <users.length; i++){
    // lookup[users[i].id] = users[i];
    result.push({...users[i], ...lookup[users[i].id]});
}

// console.logresult);
console.log(result);