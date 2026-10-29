const readline = require('readline-sync');

function parseNumbers(str) {
    const strs = str.split(' ');
    const numbers = [];

    for (let i = 0; i < strs.length; i ++) {
        const number = +strs[i];
        numbers.push(number);
    }

    return numbers;
}

function merge(arr1, arr2) {
    const merged = [];

    for (let i = 0; i < arr1.length; i++) {
        merged.push(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        merged.push(arr2[i]);
    }

    return merged;
}

function buildOccurences(values) {
    const occurences = {};

    for (let i = 0; i < values.length; i++) {
        const number = values[i];

        if (number in occurences) {
            occurences[number]++;
        } else {
            occurences[number] = 1;
        }
    }

    return occurences;
}

function sort(values) {
    const occurences = buildOccurences(values);

    const sorted = [];

    for (const number in occurences) {
        const occurence = occurences[number];

        for (let i = 0; i < occurence; i++) {
            sorted.push(number);
        }
    }

    return sorted;
}

function join(values, separator) {
    if (values.length === 0) {
        return '';
    }
    
    let joined = String(values[0]);

    for (let i = 1; i < values.length; i++) {
        const value = values[i];
        joined += (separator + String(value));
    }

    return joined;
}

const list1 = parseNumbers(readline.question('Enter list1: '));
const list2 = parseNumbers(readline.question('Enter list2: '));

const merged = merge(list1, list2);
const sorted = sort(merged);
const joined = join(sorted, ' ');

console.log(`The merged list is ${joined}`);
