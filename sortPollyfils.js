Array.prototype.mySort = function (compareFn) {
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      const shouldSwap = compareFn
        ? compareFn(this[j], this[j + 1]) > 0
        : String(this[j]) > String(this[j + 1]);

      if (shouldSwap) {
        [this[j], this[j + 1]] = [this[j + 1], this[j]];
      }
    }
  }

  return this;
};

console.log([5, 2, 8, 1].mySort((a, b) => a - b));
// [1, 2, 5, 8]