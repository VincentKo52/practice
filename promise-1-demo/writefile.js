const fs = require('fs');

const data = 'Saya akan lawan';

fs.writeFile('note.txt', data, function(err) {  //membuat file baru bernama note.txt dan disalin isinya dengan data
    console.log(err); //null (akan muncul ENOENT jika salah nama file atau dir)
});






















