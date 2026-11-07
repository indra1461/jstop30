Promise.myPromiseAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }

    const results = [];
    let completedCount = 0;
    if (promises.length === 0) {
      return resolve(results);
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completedCount++;
          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch(reject); // Immediate reject on first error
    });
  });
};
// --- TEST CASE FOR YOU ---
const p1 = Promise.resolve(10);
const p2 = new Promise((res) => setTimeout(() => res(20), 100));
const p3 = 30; // primitive value test

Promise.myPromiseAll([p1, p2, p3])
  .then((res) => console.log("Success:", res)) // Expected: [10, 20, 30]
  .catch((err) => console.error("Failed:", err));
