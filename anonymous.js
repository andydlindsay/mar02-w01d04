const fnRunner = function(callback) {
  callback('Alice');
};

const sayHello = function(name) {
  console.log(`hello ${name}`);
};
fnRunner(sayHello);
fnRunner(function(val) {
  console.log('hello ' + val)
});
