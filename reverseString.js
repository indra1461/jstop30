const str = "i love javascript";
//const res  = str.split(' ').reverse().join(" ");
const str2 = str.split(' ');
let left = 0;
let right = str2.length -1;
while (left < right) {
    let temp = str2[left];  
str2[left] = str2[right];
str2[right] = temp;

    left++;
    right--

}


console.log(str2.join(" "));