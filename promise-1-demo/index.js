const fs = require('fs');
const readline =require('readline-sync');

function saveInputs(name, gender) {
//    const data = `${name} ${gender}`;                         // cara set input data di file txt 
//    const data = `{"name": "${name}","gender": "${gender}"}`; // cara set input manual di text file JSON
    const data = JSON.stringify({ name, gender });              // dengan stringify
    fs.writeFile('record.json', data, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

/**
 * Read saved inputs
 * @param {({name: string, gender: string}) => void} callback 
 */
function readSavedInputs(callback) {
    fs.readFile('record.json', 'utf-8', function(err, data) {
        if (err && err.code === 'ENOENT') {
            callback(undefined);
        } else {
            const record = JSON.parse(data);
            //const [name, gender] = data.split(' ');
            //callback({name, gender});
            callback(record);
        }
    });
}

readSavedInputs(function(inputs) {
    let name;
    let gender;

    if (!inputs) {
        name = readline.question('Input your name: ');
        gender = readline.question('Input your gender: '); 
        saveInputs(name, gender);
    } else {
        name = inputs.name;
        gender = inputs.gender;
    }

    const title = gender === 'male' ? 'Mr' : 'Mrs';

    console.log(`Welcome ${title}. ${name}`);
});



//Penyimpanan data yang paling rekomendasi digunakan adalah dalam file JSON (Javascript Object Notation)
//JSON bukanlah object melainkan string
//Sebenarny JSON bukanlah JavaScript namun pembuatan nya terinspirasi dari JavaScript
//Penulisan property key pada obj JSON harus didalam petik dua " "


