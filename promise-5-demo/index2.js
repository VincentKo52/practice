 const promise1 = new Promise ((resolved, reject) => {
    setTimeout(() => resolved(1), 5000);
});

const promise2 = new Promise ((resolved, reject) => {
    setTimeout(() => reject(2), 2000);
});

const promise3 = new Promise ((resolved, reject) => {
    setTimeout(() => resolved(3), 4000);
});

//const mergePromise = Promise.all([promise1, promise2, promise3]);

// mergePromise.then((value) => {
//     console.log(value);
// });

// mergePromise.catch((err) => {
//     console.log(err);
// });

//PROMISE API:
// Promise.all  - 1st
// Promise.allSettled - 3rd
// Promise.any - x 
// Promise.race - 2nd

const promiseAll = Promise.all([promise1, promise2, promise3])

promiseAll
.then((value) => console.log(value))
.catch((err) => console.log(err));  
// Promise.all = mencetak array semua hasil jika SEMUA resolved ([ 1, 2, 3 ] di 5000ms)
// Karena promise2 reject(2), maka langsung masuk .catch() dan mencetak '2' di detik ke-2 (fail-fast)

const promiseAny = Promise.any([promise1, promise2, promise3]);

promiseAny.then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
});
// Promise.any = promise pertama yang duluan resolved
// Maka di detik ke-4 akan tercetak '3' (promise pertama yang berasil resolved di 4000ms)
// jika semua diubah menjadi reject, maka akan tercetak:
// [AggregateError: All promises were rejected] { [errors]: [ 1, 2, 3 ] }

const promiseRace = Promise.race([promise1, promise2, promise3]);

promiseRace.then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
});
// Promise.race = promise pertama yang berhasil (duluan resolved maupun rejected)
// Maka di detik ke-2 akan tercetak '2' (promise pertama yang pertama selesai dengan reject(2))

//use case: server timeout
// Promise.race([promise1, new Promise((resolve, reject) => {
//     setTimeout(() => reject('Timeout'), 30000);
// })])

const promiseAllSettled = Promise.allSettled([promise1, promise2, promise3]);

promiseAllSettled.then((value) => {
    console.log(value);
});
// Mencetak array status semua promise secara lengkap di 5000ms
// [
//   { status: 'fulfilled', value: 1 },
//   { status: 'rejected', reason: 2 },
//   { status: 'fulfilled', value: 3 }
// ]

promiseAllSettled.then((value) => {
    const result = value.filter(p => p.status === 'fulfilled');
    console.log(result);
});
// Memberikan filter agar hanya memunculkan promise yang 'fulfilled'
// [
//   { status: 'fulfilled', value: 1 },
//   { status: 'fulfilled', value: 3 }
// ]











