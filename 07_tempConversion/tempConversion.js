const convertToCelsius = function(degF) {
  return Number(((degF - 32)*5/9).toFixed(1));
};

const convertToFahrenheit = function(degC) {
  return Number((32 + degC*9/5).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
