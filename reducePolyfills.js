Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(
      accumulator,
      this[i],
      i,
      this
    );
  }

  return accumulator;
};

const total = [1, 2, 3, 4].myReduce(
  (acc, current) => acc + current,
  0
);

console.log(total); // 10