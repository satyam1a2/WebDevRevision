

// import { sum, sub, multiply, divide } from '../utility/Math.js';


// console.log("Sum:", sum(5, 3));          

import chalk from 'chalk';

console.log(chalk.blue("Starting tasks..."));

import figlet from 'figlet'

figlet("Kuch Alag Nhi Chlra", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
