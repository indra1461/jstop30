function anagram(str1, str2){
if(str1.length !==str2.length){
    return false;
}
const freq = {}

for(let i = 0;i < str1.length;i++){
    let current = str1[i];
    if(freq[current]===undefined){
        freq[current] = 1;
    }  else{
        freq[current] = freq[current] +1
    }
}


for(let i = 0;i < str2.length;i++){
    let current = str2[i];
    if(!freq[current]){
        return false;
    }  else{
        freq[current] = freq[current] -1
    }
}
return true;
}

console.log(anagram("aab", "aba"));