//const fs = require('node:fs').promises;  //versi yg lebih baru dengan penambahan node:

// Dengan sub module / sub package
const fs = require('node:fs/promises');  //lebih rapi dan kencang daripada penggunaan object .promises(harus dibongkar dulu objeknya dan memory assignment )

// Node.Js lalu menambahkan suatu konvensi bahwa untuk library bawaan node.js harus ditambahkan node:   Ex: require("node:fs")

// const promise = fs.readFile("pip-and-the-lost-sta.txt", "utf-8");  //tidak pakai callback

// promise.then(function(data) {
//     console.log("File telah terbaca");
// });

// promise.catch(function(err) {
//     console.log("Terjadi error");  
// });

fs.readFile("pip-and-the-lost-star.txt", "utf-8")
    .then(function(data) {
        //console.log(data);
        console.log("File telah terbaca");
    })
    .catch(function(err) {
        console.log("Terjadi error");  
    });

console.log("Program ended");   













