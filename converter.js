var argv = require("yargs")
  .example("$0 add a numeber")
  .example("converter.js 16")
  .example("converter.js 12").argv;

const yargs = require("yargs");
const arguments = yargs.argv;
const input = arguments["_"][0];

function convertToFahrenheit(input) {
  let fahrenheit = (input * 9) / 5 + 32;
  return fahrenheit;
}

function convert(input,degree) {
  var deg = degree || "F";
  var temp = convertToFahrenheit(input);
  console.log(temp + `º${deg}`);
}

// console.log(arguments["_"]);
// console.log(arguments);
// console.log(input);
console.log(convert(input,degree));
