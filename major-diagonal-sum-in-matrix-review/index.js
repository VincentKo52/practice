'use strict';

const readline = require('readline-sync');

/**
 * @typedef {number[][]} Matrix
 */

const MATRIX_SIZE = 4;

/**
 * Parse the string into numbers
 * @param {string} str 
 * @returns {number[]} 
 */
function parseNumbers(str) {
    return str.split(' ').map(Number);
}

/**Sum the numbers in the major diagonal axis
 * @param {Matrix}} m
 * @returns {number}
 */
function sumMajorDiagonal(m) {
    let sum = 0;
    
    for (let i=0; i < m.length; i++) {
        sum += m[i][i];
    }

    return sum;
}

/**Sum the numbers in the minor diagonal axis
 * @param {Matrix} m
 * @returns {number}
 */
function sumMinorDiagonal(m) {
    let sum = 0;

    for (let i = 0; i < m.length; i++) {
        sum += m[i][m.length - i - 1];
    }

    return sum;
}

console.log(`Enter a ${MATRIX_SIZE}-by-${MATRIX_SIZE} matrix row by row: `);

/**
 * @type {Matrix}
 */
const matrix = [];

for (let i = 0; i < MATRIX_SIZE; i++) {
    const row = parseNumbers(readline.question(''));
    matrix.push(row);
}

const sum1 = sumMajorDiagonal(matrix);
const sum2 = sumMinorDiagonal(matrix);

console.log(`Sum of the elements in the major diagonal is ${sum1}`);
//console.log(`Sum of the elements in the minor diagonal is ${sum2}`);







































