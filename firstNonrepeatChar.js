function firstUnique(str) {
    const frq = {}
    for(let i = 0; i < str.length;  i++){
        let cur = str[i];
        frq[cur] = (freq[cur] || 0) + 1;
    }
    for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === 1) {
      return str[i];
    }
  }
  return null
}
console.log('aabbcddee')