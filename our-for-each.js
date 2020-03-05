const arr = [1, 2, 3];

const forEach = (arr, cb) => {
  for (const elem of arr) {
    cb(elem);
  }
};

forEach(arr, (num) => {
  console.log(num * 4);
});
