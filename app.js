const readline = require('readline');
var triangleChallenge = require('./triangleChallenge.js');
var enterdNum = 1;
var arrNum = [];
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {
    if(line === 'q' && enterdNum === 1) {
        process.exit();
    }
    arrNum.push(parseFloat(line));
    enterdNum++;
    if(enterdNum > 3) {
      console.log("\x1b[32m", triangleChallenge.triangleChallenge(arrNum), '\x1b[0m');
      enterdNum = 1;
      arrNum = [];
      console.log("\x1b[34m", 'Enter 3 number(for exit enter q):', '\x1b[0m');
    }
});

console.log("\x1b[34m", 'Enter 3 number(for exit enter q):', '\x1b[0m');
