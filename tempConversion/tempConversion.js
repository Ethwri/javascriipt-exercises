const ftoc = function(fahrenheit) {
  var fahrenheitConverted = (fahrenheit - 32) * 5/9;
  return parseFloat(fahrenheitConverted.toFixed(1));
}

const ctof = function(celsius) {
  var celsiusConverted = (celsius * 9/5) + 32;
  return parseFloat(celsiusConverted.toFixed(1));

}

module.exports = {
  ftoc,
  ctof
}
