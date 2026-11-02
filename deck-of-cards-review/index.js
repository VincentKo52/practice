const readline = require('readline-sync');

const RANK_COUNT = 13;

function determineRank(number) {
    const index = number % RANK_COUNT;
    switch (index) {
        case 0: return 'Ace';
        case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
            return String(index + 1);
        case 10: return 'Jack';
        case 11: return 'Queen';
        case 12: return 'King';
    }
}

function determineSuit(number) {
    switch (Math.floor(number / RANK_COUNT)) {
        case 0: return 'Spades';
        case 1: return 'Hearts';
        case 2: return 'Diamonds';
        case 3: return 'Clubs';
    }
}

const number = Number(readline.question('Enter card number: '));
const rank = determineRank(number);
const suit = determineSuit(number);

console.log(`Card number ${number}: ${rank} of ${suit}`);


