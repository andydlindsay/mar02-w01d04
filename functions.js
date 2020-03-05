function sayHello() {
  console.log('hello there');
};

const sayHelloAgain = function() {
  console.log('I am in here!!!');
  console.log(sayHelloAgain.otherKey);
};
const otherFn = sayHelloAgain;

otherFn.otherKey = 'Andy';
otherFn.otherKey2 = 'Andy';
otherFn(); // sayHelloAgain();
