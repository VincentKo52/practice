const fs = require('node:fs');

//How to make a Promise by wrapping fs.readFile 
function readFile(fileName, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, encoding, (err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

const promise = readFile('note.txt', 'utf-8');
promise.then((data) => {
    console.log(data);
});