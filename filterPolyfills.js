Array.prototype.myFilter = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

const output = [1, 2, 3, 4].myFilter(
  (item) => item > 2
);

console.log(output); // [3, 4]