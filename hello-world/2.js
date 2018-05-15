function printHelp() {
  console.log("2.js (c) SPDUK");
  console.log("");
  console.log("usage:");
  console.log("--help         print this help");
  console.log("--file={NAME}       read the file of {NAME} and output it");
  console.log("");
}

var args = require("minimist")(process.argv.slice(2), { string: "name"})

if (args.help || !args.name) {
  printHelp();
  process.exit(1);
}
var name = args.name;

console.log("Hello " + name);