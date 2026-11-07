'use strict';

class Account {
    /**
     * Initialize an instance of account.
     * @param {number} id 
     * @param {number} balance 
     * @constructor
     */
    constructor(id, balance) {
        this.id = id;
        this.balance =balance;
    }
    
    /**
     * Withdraw  the given amount from the account.
     * @param {number} amount
     */
    withdraw(amount) {
        if (amount < 0) {
            throw new InvalidAmountError(amount);    // const meong = new InvalidAmountError(amount);
        }                                            // throw meong;
        if (this.balance < amount) {
            throw new InsufficientFundsError();
        }

        this.balance -= amount;
    }
}

module.exports = Account;