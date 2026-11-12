// const err = new Error("Something went wrong");
// Stack trace terjadi ketika Error di initialize bukan saat di throw. (terjadi langsung dibagian luar (object global))

function Meong(message) {  // Membuat custom error dengan stack trace tanpa harus inherit ke Error obj    //38:52
    this.message = message;
    Error.captureStackTrace(this); //Method ini yang bertanggung jawab dalam mengcapture stack trace
}

// Di balik layar:
// Error.captureStackTrace = function(obj) {
//     obj.stack  //SS DARI CALLSTACK  (menambah property stack secara otomatis ke dalam obj)
// }

const meong = new Meong("Something went wrong");
//console.log(meong.message);   //Something went wrong (maka hanya akan menjadi obj biasa)
console.log(meong.stack);     //undefined  (muncul ketika property .captureStackTrace dihilangkan, kecuali kita membuat property secara manual)

console.log('-------------------------------------------------------------------------------------------');

// function calculateTax(amount) {
//     throw new MyError('My Error went wrong');  //best practice adalah dengan langsung dithrow tanpa disimpan terlebih dulu dalam variable.
//     return amount * 0.15;
// }

// function applyInterest(principal) {
//     const result = calculateTax(principal * 1.05);
//     console.log("finished calculating tax");
//     return result;
// }    

// function processPayment(basePrice) {
//     const result = applyInterest(basePrice);
// //    console.log(typeof err.stack);
//     console.log("finished calculating interest");
//     return result;
// }

// try {
//     processPayment(100);
// } catch (err) {
//     console.log(err.stack);   // melihat stack trace (jejak error) dengan data type string
//}


