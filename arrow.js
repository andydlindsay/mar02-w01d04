const sayHello = function() {};
const sayHello = () => {};

const marks = ['Zuckerberg', 'Wahlburg', 'Twain'];
marks.forEach(function(name) {});
marks.forEach(name => {
  console.log(this);
});

marks.filter(n => n !== 'Wahlburg');
// arrow function
// fat arrow functions
