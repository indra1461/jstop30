function findLongestWords(str){
    let longest = "";
    const words = str.split(" ");
    for (let i = 0;i < words.length;i++) {
        if(words[i].length > longest.length){
            longest = words[i];

        }
    }
return longest;

}

console.log(findLongestWords("i love word javascript"));