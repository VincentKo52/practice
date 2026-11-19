const fs = require('node:fs');
const util = require('node:util');

//How to convert traditional callback function into Promise function using Node.js built-in util module
const readFile = util.promisify(fs.readFile);
const promise = readFile('note.txt', 'utf-8');
promise.then((data) => {
    console.log(data);
});