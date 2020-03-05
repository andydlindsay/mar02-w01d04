const sayHello = (name) => {
  // const name = 'Bob';
  console.log(`hello ${name}`);
  const age = 10;
};

const fnRunner = (cb) => {
  const name = 'Carol';
  console.log(age);
  cb(name);
};

const name = 'Alice';
fnRunner(sayHello);
