const readline = require('readline-sync');
const padLeft = require('pad-left');
const padRight = require('pad-right');

const character = readline.question('Input a character to use in loop: ');
const iteration = Number(readline.question('How many iterations you want to use? '));
const loop = Number(readline.question('How many looping do you want? '));

console.log('');

function ulang(loop) {
    for (let i = 0; i < loop; i++) {
    
        for (let i = 0; i < iteration; i++) {
            let str = '';
            for (let j = 0; j <= i; j++) {
                    str += `${character}`;
            }

            let str2 = '';
            for (let j = 1; j <= i; j++) {
                    str2 += `${character}`;
            }

            const hasil = padLeft(`${str}`, `${iteration}`, ' ') + padRight(`${str2}`, `${iteration}`, ' ');
            console.log(hasil);
        }

        for (let i = iteration - 1; i > 0; i--) {
            let str = '';
            for (let j = i; j > 0; j--) {
                    str += `${character}`;
            }

            let str2 = '';
            for (let j = i - 1; j > 0; j--) {
                    str2 += `${character}`;
            }

            const hasil = padLeft(`${str}`, `${iteration}`, ' ') + padRight(`${str2}`, `${iteration}`, ' ');
            console.log(hasil);
        }
    }
}

ulang(loop);
console.log('');

function Circle(radius) {
    this.radius = radius;
    this.Area = Math.PI * radius ** 2;
    this[Symbol.toPrimitive] = function(hint) {
        if (hint === 'number') {
            return this.Area;
        }
    };
}

const circle1 = new Circle(10);
const circle2 = new Circle(23);

console.log(circle1 > circle2);