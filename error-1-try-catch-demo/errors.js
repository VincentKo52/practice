'use strict';

class InsufficientFundsError extends Error {
    constructor() {
        super("Insufficient funds error");
    }
}

class InvalidAmountError extends Error {
    /**
     * Initialize an instance of InvalidAmount Error
     * @param {number} amount
     * @constructor
     */
    constructor(amount) {      //property amount ditambahkan untuk menambah informasi tambahan pada error
        super("Invalid amount error");
        this.amount = amount;  
    }
}

module.exports = { InsufficientFundsError, InvalidAmountError };