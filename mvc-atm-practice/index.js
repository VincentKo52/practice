const readline = require('readline-sync');
const hero = readline.question('is he a hero (Y/N): ');

if (hero === 'Y') {
    console.log('You are stupid.'); 
}   else if (hero === 'N') {
    console.log('You are smart');
};