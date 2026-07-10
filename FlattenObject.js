function flattenObject(obj, parentKey ="", result={}){
   
    for (const key in obj) {
        let newKey = parentKey? `${parentKey}.${key}`: key;
        if(typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
            flattenObject(obj[key], newKey,result);
        }else{
            result[newKey] = obj[key]
        }
    }
    return result;
}
 
const obj = {
  user: {
    name: "Indra",
    address: {
      city: "Mumbai"
    }
  },
  active: true
};
console.log(flattenObject(obj));