const add = function(a,b) {
  return a + b;
	
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(array) {
  let sum = 0;
  array.forEach(element => {
  sum += element;
 });
  return sum;
};

const multiply = function(...args) {
  let res = 1;

  for (let i = 0; i < args.length; i++){
    res *= args[i]
  }
  return res
};

const power = function(a,b) {
  return Math.pow(a,b)
};

const factorial = function(n) {
  if (n === 0) return 1;

  return n * factorial(n-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
