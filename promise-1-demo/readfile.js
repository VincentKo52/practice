const fs = require('fs');

// fs.readFile('pip-and-the-lost-star.txt', 'utf-8', function(err, data) {
//     console.log(err);     //null (tidak ada error)
// });                       //jika ada kesalahan penulisan nama file yg akan dibaca atau salah dir, maka muncul Error: ENOENT

// fs.readFile('pip-and-the-lost-star.txt', 'utf-8', function(err, data) {
//     console.log(data);     //undefined (jika ada kesalahan nama file atau dir)
// });                        //jika berhasil -> akan membaca isi file dalam text

// bisa lihat dokumentasi dari fs.readFile(path[,optional], callback) di nodejs.org
// Class: SystemError 
// Extends: <errors.Error>
// Yang paling penting : code <string> The string error code

fs.readFile('pip-and-the-lost-star.txt', 'utf-8', function(err, data) {
//    console.log(err.code);  // muncul 'ENOENT' - no such file or directory
    if (err && err.code === 'ENOENT') {  // ENOENT = Error no entry
        console.log('The file does not exist');
        return;
    }

    console.log(data);
});                         







