// takes in a string and prints hello plus string to the console
const sayHello = function(name) {
  console.log(`hello ${name}`);
};

// sayHello('Alice');
// const name = 'Bob';
// sayHello(name);

const fnRunner = function(fn) {
  fn('Carol'); // console.log('Carol');
};
fnRunner(sayHello);
fnRunner(console.log);
