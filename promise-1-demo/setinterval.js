console.log('1. Program started');

//function bark() {            //function dclaration
//const bark = function() {    //function expression
//const bark = () => {         //arrow function
// const bark = function() {
//     console.log('2. woof');
// }

//console.log(typeof bark);  //function

// setTimeout(function() {   //function bark langsung dimasukkan ke parameter dari setTimeout
//     console.log('2. woof');
// }, 3000); 

// setTimeout(() => {   //function setTimeout disingkat lagi menjadi arrow funtion
//     console.log('2. woof');
// }, 3000); 

// function runAfter3Seconds() {   //setiap 3s, akan cetak 2. woof non stop
//     setTimeout(() => {   
//         console.log('2. woof');
//         runAfter3Seconds();
//     }, 3000); 
// }

// runAfter3Seconds();  

// setInterval(() => {     //setInterval = setiap periode waktu tertentu, fungsi didalamnya akan dijalankan
//     console.log('2. woof');
// }, 3000); 

// setInterval bisa digunakan untuk membuat jam yang bergerak setiap 1s.
setInterval(() => {       
    console.log(formatTime(Date.now()));
}, 1000); 

function formatTime(ms) {
    const date = new Date(ms);

    let formattedTime = '';
    formattedTime += String(date.getHours()).padStart(2, '0');
    formattedTime += ':';
    formattedTime += String(date.getMinutes()).padStart(2, '0');
    formattedTime += ':';
    formattedTime += String(date.getSeconds()).padStart(2, '0');
    
    return formattedTime;
}

console.log('3. Program ended');   // 1. Program started
                                   // 3. Program ended
                                   // 2. woof (muncul setelah 3s)


