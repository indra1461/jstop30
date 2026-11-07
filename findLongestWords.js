function findLongestWords(str) {
  let longest = "";
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let cur = words[i];
    if (cur.length > longest.length) {
      longest = cur;
    }
  }
  return longest;
}

console.log(findLongestWords("i love word javascript"));



