const chalk = require('chalk');

console.log(chalk.cyan('\nEXERCISE 1 LOADED\n'));

const zip = (input) => {

  var output = [];
  if (input.length === 0) {
    return [];
  }
  return input
    .foreach(element => {

    });
  // Your future job begins here ...
};

module.exports = {
  zip: zip,
  run: zip
};
