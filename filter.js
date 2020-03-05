const arr = [7, 10, 3, 21, 5];

// const newArr = arr.filter(function(el) {
//   return el < 8;
// });

// const newArr = arr.filter(e => e < 8);

const filter = (arr, cb) => {
  const result = [];
  for (const elem of arr) {
    if (cb(elem)) {
      result.push(elem);
    }
  }
  return result;
};

const newArr = filter(arr, e => e > 20);

console.log(newArr);
