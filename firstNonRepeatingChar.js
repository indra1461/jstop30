function firstNonRepeating(str) {
  const freq = {};

  for (let i = 0; i < str.length; i++) {
    const current = str[i];

    if (freq[current] === undefined) {
      freq[current] = 1;
    } else {
      freq[current] = freq[current] + 1;
    }
  }

  for (let j = 0; j < str.length; j++) {
    if (freq[str[j]] === 1) {
      return str[j];
    }
  }
}

console.log(firstNonRepeating("aabbcddee")); // "c"