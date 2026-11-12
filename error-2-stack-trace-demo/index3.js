class CalculateTaxError extends Error {  //Dengan class, error terjadi di calculateTax (pertama kali diinitialize)
    constructor() {
        super("Calculate tax error");

        if (Error.captureStackTrace) {                         // karena method ini belum tentu ada di semua browser, maka pengecekan ditambahkan(pro)
            Error.captureStackTrace(this, CalculateTaxError);  // Best practicenya adalah walaupun extends ke Error, 
        }                                                      // tetap harus exclude constructor itu sendiri secara manual
    }                                                      
}

// function CalculateTaxError() {                        //Dengan fungsi buatan sendiri, error terjadi di fungsi CalculateTaxError(error dicapture disini)
//     this.message = "Calculate tax error";             //Inilah kekurangan dari method .captureStackTrace
//     Error.captureStackTrace(this, CalculateTaxError); //Di balik layar, ia mengexclude fungsi CalculateTaxError
// }                                                     //(dengan cara menambah parameter tambahan kedalamnya -> fungsi yang ingin diexclude)

// Di JavaScript engine seperti V8(Chrome), JavaScript Core(Safari) dan Mozilla Firefox, 
// constuctor function nya sudah diexclude secara otomatis (best practice). 
// Namun di beberapa browser yang jelek, constructor function nya tidak diexclude sehingga menjadi tercemar.

function calculateTax(amount) {
    throw new CalculateTaxError();
    return amount * 0.15;
}

function applyInterest(principal) {
    const result = calculateTax(principal * 1.05);
    console.log("finished calculating tax");
    return result;
}    

function processPayment(basePrice) {
    const result = applyInterest(basePrice);
    console.log("finished calculating interest");
    return result;
}

try {
    processPayment(100);
} catch (err) {
    console.log(err.stack);   // melihat stack trace (jejak error) dengan data type string
}


