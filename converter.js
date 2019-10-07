var yargs = require("yargs");
var arguments = yargs.argv;
var input = arguments["_"][0];

// var input = Array.from(arguments);

function convertToFahrenheit(input) {
  var input;
  fahrenheit = (input * 9) / 5 + 32;
  return fahrenheit;
}

// console.log(arguments["_"]);
// console.log(arguments);
// console.log(input);
console.log(convertToFahrenheit(input));
