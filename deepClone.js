function deepClone(obj){
    let clone = Array.isArray(obj) ? [] : {};;
    for (let key in obj) {
        if(typeof obj[key] === "object" && obj[key] !== null) {
            clone[key] = deepClone(obj[key]);
        }else{
            clone[key] = obj[key]
        }

        }
        return clone;
    }


const original = {
  name: "Indra",
  skills: ["JavaScript", "React"],
  address: {
    city: "Mumbai"
  }
};

const copied = deepClone(original);

copied.address.city = "Pune";

console.log("Original:", original);
console.log("Copied:", copied);