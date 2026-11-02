const readline = require('readline-sync');

const size = +readline.question('Enter size: ');

console.log(' ');

// O(n)
let line = ' ';

for (let i = 0; i < size; i++) {
    line += '*';
    console.log(line);
}
