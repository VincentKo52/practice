'use strict';

const { InvalidAmountError, InsufficientFundsError } = require('./errors');
const Account = require('./account');

const account = new Account(1, 100);

try {                                         // account.withdraw( );
    account.withdraw(5);                      // (-50) -> Invalid amount, please try again
    console.log("Withdraw succeeded");        // (5e6) -> Insufficient funds, please try again
} catch (err) {                               // (5)   -> Withdraw succeeded
    if (err instanceof InvalidAmountError) {
        console.log(`Invalid amount (${err.amount}), please try again. `);
    } else if (err instanceof InsufficientFundsError) {
        console.log('Insufficient funds, please try again');
    } else {
        console.log('Unknown error, please try again');
    }
}                      

console.log("Program ended");

// dibalik layar Error adalah sebuah fungsi dengan parameter message (agar programer dapat mengetahui penyebab error tersebut)
function Error(message) {
    this.message = message;
}
