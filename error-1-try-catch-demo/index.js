'use strict';

function Account(id, balance) {
    this.id = id;
    this.balance =balance;
}

Account.prototype.withdraw = function (amount) {
    if (this.balance < amount) {
        throw new Error("Insufficient balance");
    }

    this.balance -= amount;
}

const account = new Account(1, 100);

try {
    account.withdraw(1e6);
    console.log("Withdraw succeeded");
} catch (err) {
    console.log(err);  //di balik layar di throw obj error lalu akan muncul pesan error di line 8 karakter ke 15
}                      // tahan Ctrl lalu klik pesan error untuk ke lokasi error secara langsung

console.log("Program ended");
