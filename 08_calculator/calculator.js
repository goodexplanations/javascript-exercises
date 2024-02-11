const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	
  if (array.length == 0){
    return 0;
  }
  
  let sum = 0;

  for (i=0; i < array.length; i++){
    sum += array[i];
  }

  return sum;
};

const multiply = function (array) {
  
  let product = array[0] * array[1];
  
  if (array.length > 2) {
    for(i=2; i<array.length; i++){
      product *= array[i];
    }
  }
  
  return product;

};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	if(num == 0){return 1}

  let fac = 1;

  if(num > 1){
    for (i=num; i>1; i--){
      fac *= i;
    }
  }

  return fac;
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
