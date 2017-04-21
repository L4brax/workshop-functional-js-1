const chalk = require('chalk');

console.log(chalk.cyan('\nEXERCISE 3 LOADED\n'));

const reverseStringTest = (input) => {
  if (input.length === 0) {
    return '';
  } else {
    return input[input.length - 1] + reverseString(input.substring(0, input.length - 1));
  }
};

// Je ne comprends pas pourquoi j'ai 0 dans mes test en actual...
const reverseString = (input, acc) => {
  let final = '' | acc;
  if (input.length === 0) {
    return final;
  } else {
    return reverseString(input.slice(0, input.length - 1), final+input[input.length - 1]);
  }
  // Your future job begins here ...
};

module.exports = {
  reverseString: reverseString,
  run: reverseString
};
