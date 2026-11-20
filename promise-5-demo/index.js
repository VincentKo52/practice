//Mencetak hasil promise secara terpisah sesuai urutan muncul
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('resolving 1');
        resolve(1);
    }, 5000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('resolving 2');
        resolve(2);
    }, 2000);
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('resolving 3');
        resolve(3);
    }, 3000);
})

//Mencetak semua hasil promise yang resolved
const mergePromise = Promise.all([promise1, promise2, promise3]);

mergePromise.then(([value1, value2, value3]) => {
    console.log('value 1: ' + value1);
    console.log('value 2: ' + value2);
    console.log('value 3: ' + value3);
});
























