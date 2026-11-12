// const err = new Error("Something went wrong");
// Stack trace terjadi ketika Error di initialize bukan saat di throw. (terjadi langsung dibagian luar (object global))

// didalam Error adalah sebuah function:
// function Error(message) {
//     Error.captureStackTrace(this);
// }

// const err = new Error('somethign went wrong');

// Error.captureStackTrace = function(obj) {
//     obj.stack  //SS DARI CALLSTACK
// }

function MyError(message) {  // Membuat custom error dengan stack trace    //38:52
    this.message = message;
    Error.captureStackTrace(this);
}


function calculateTax(amount) {
    throw new MyError('My Error went wrong');
    return amount * 0.15;
}

// function calculateTax(amount) {
//     throw new Error("Something went wrong"); //best practice adalah dengan langsung dithrow tanpa disimpan terlebih dulu dalam variable.
//     return amount * 0.15;
// }

function applyInterest(principal) {
    const result = calculateTax(principal * 1.05);
    console.log("finished calculating tax");
    return result;
}    

function processPayment(basePrice) {
    const result = applyInterest(basePrice);
    console.log(typeof err.stack);
    console.log("finished calculating interest");
    return result;
}

try {
    processPayment(100);
} catch (err) {
    console.log(err.stack);   // melihat stack trace (jejak error) dengan data type string
}


