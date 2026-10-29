const readline = require('readline-sync');

const rowColumn = readline.question('Enter the number of rows and columns: ').split(' ');
const rows = parseInt(rowColumn[0]);
const columns = parseInt(rowColumn[1]);

console.log(`Enter the array: `);


const table = [];
for (let i = 0; i < rows; i++) {
  const row = readline.question('').split(' ');
  table[i] = row.slice(0, columns);
}
    
for (let i = 0; i < table.length; i++) {
    const rowElements = table[i];
    let rowString = "";
    for (let j = 0; j < rowElements.length; j++) {
        //console.log(+rowElements[j]);
        rowString += (+rowElements[j]) + " ";
    }
    console.log(rowString);
}


//const rowElements = table[0];
//console.log(table.length);
//console.log(rowElements.length);
const box = [];
for (i = 0; i < table.length; i++) {
    box[i] = table[i];
}
console.log(box);

const string1 = table[0];
const string2 = table[1];
//const element = table[0][2];

//console.log(element);
//console.log(string1.indexOf(rowElements[2]));

const before = `${string1},${string2}`;
const after = [];
const beforeArray = before.split(',');
for (let i = 0; i < beforeArray.length; i++) {
    after[i] = +(beforeArray[i]);
    console.log(after[i]);
}
console.log(before);
console.log(after);

let maxNumber = after[0];
for (let i =1; i < after.length; i++) {
    if (after[i] > maxNumber) {
        maxNumber = +after[i];
        maxPosition = i;
    }
}
console.log(maxNumber);
console.log(maxPosition);






