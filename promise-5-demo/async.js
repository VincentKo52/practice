// Dengan async, apapun yang direturn akan direturn sebagai Promise yang diresolved
// Jika error, maka akan direturn sebagai Promise.reject
async function double(num) {
    //throw new Error('Haha kena error nih');
    //return Promise.reject(new Error('Haha kena error nih'));    

    return num * 2;  
    //return Promise.resolve(num * 2);
}  

double(5)
    .then((value => console.log(value)))   // 10
    .catch((err) => console.log(err));     

async function readFile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Vincent');
        }, 3000);
    });
}

// await hanya bisa dipanggi di dalam async function
async function main() {
    const name = await readFile();     // Dengan await, menunggu hasil dari readFile baru lanjut ke bawah
    console.log(`My name is ${name}`); // tercetak 'My name is Vincent' setelah 3000ms
}

main();  

// Maka akan tercetak PROGRAM ENDED terlebih dulu karena hasil dari main() telah direturn sebagai promise
console.log('PROGRAM ENDED') 

// PROGRAM ENDED
// 10
// My name is Vincent









