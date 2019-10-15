var argv = require("yargs")
  .example("$0 16")
  .example("converter.js 32 f")
  .example("converter.js 42 c").argv;

const yargs = require("yargs");
const arguments = yargs.argv;
const input = arguments["_"][0];
var degree = arguments["_"][1];

function convertToFahrenheit(input) {
  let fahrenheit = (input * 9) / 5 + 32;
  return fahrenheit;
}

function convert(input, degree) {
  var deg = degree || "F";
  var temp = convertToFahrenheit(input);

  console.log(temp + `º${deg}`);
}
// console.log(arguments["_"]);
// console.log(arguments);
// console.log(input);
convert(input, degree);
