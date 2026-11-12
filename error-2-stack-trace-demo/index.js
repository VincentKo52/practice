const unknownError = new Error('Something went wrong');  //jika diinitialize di luar, maka terjadinya Error langsung di global object tanpa stack trace
// Stack trace terjadi ketika Error di initialize bukan saat di throw. 

function calculateTax(amount) {
//  try {
        throw unknownError;
//        const err = new Error('Something went wrong');
//        throw err;
//    }   catch (err) {}              //finished calculating tax
    return amount * 0.15;             //finished calculating interest
}

function applyInterest(principal) {
//    let result;
//    try {
    const result = calculateTax(principal * 1.05); //const result
//    } catch (err) {}
    console.log("finished calculating tax");        //finished calculating tax
    return result;                                  //finished calculating interest
}    

function processPayment(basePrice) {
//    let result;
//    try{
    const result = applyInterest(basePrice);         //const result
//    } catch (err) {
//        console.log(err.stack); // untuk mendapatkan stack trace
//        console.log(typeof err.stack);   //string (hanya saat .stack diakses, hasil nya baru diformat ke dalam string)
//    } 
    console.log("finished calculating interest");   //finished calculating interest
    return result;
}

try {
    processPayment(100);
} catch (err) {
//    console.log('ini terpanggil');   //bubbling sehingga yg terconsole.log hanya -> ini terpanggil
    console.log(err.stack);
}


