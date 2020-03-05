// takes in a string and prints hello plus string to the console
const sayHello = function(name) {
  console.log(`hello ${name}`);
};

const user = {
  username: 'andy',
  password: '1234'
};

// checking if user exists
const validateUser = function(user) {
  userDatabase.forEach(function(dbUser) {
  if (user.username === dbUser.username) {
    // check the password
  }
});
}

// sayHello('Alice');
// const name = 'Bob';
// sayHello(name);

const fnRunner = function(fn) {
  fn('Carol'); // console.log('Carol');
};
fnRunner(sayHello);
fnRunner(console.log);
