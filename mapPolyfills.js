Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

const arr = [1, 2, 3];

const output = arr.myMap((item) => item * 2);

console.log(output); // [2, 4, 6]