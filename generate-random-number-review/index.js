const readline = require('readline-sync');

function generateRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min + 1)) + min;
}

const min = +readline.question('Enter minimum: ');
const max = +readline.question('Enter maximum: ');

const number = generateRandomNumber(min, max);

console.log(`Random number between ${min} and ${max}: ${number}`);
 














