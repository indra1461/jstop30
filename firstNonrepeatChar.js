function firstUnique(str) {
  const frq = {};
  for (let i = 0; i < str.length; i++) {
    let cur = str[i];
    frq[cur] = (frq[cur] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    let cur = str[i];
    if (frq[cur] === 1) {
      return cur;
    }
  }
  return null;
}
console.log(firstUnique("aabbcddee"));
