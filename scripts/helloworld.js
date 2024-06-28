// node ./scripts/helloworld.js --variable "World"
const { program } = require('commander');

program
  .option('--variable');

program.parse();
const options = program.opts();

console.log("Hello " + program.args[0]);