const readline = require('readline-sync');

// Model
function Account(id, balance) {
    this.id = id;
    this.balance = balance;

    this.withdraw = function(amount) {
        this.balance -= amount;
    };

    this.deposit = function(amount) {
        this.balance += amount;
    };
}

// Controller
function AccountController() {
    this.accounts = [];

    this.generateInitialAccounts = function(count, balance) {
        for (let i = 0; i < count; i++) {
            const account = new Account(i, balance);
            this.accounts.push(account);
        }
    };

    this.findAccount = function(id) {
        for (i = 0; i < this.accounts.length; i++) {
            const account = this.accounts[i];

            if (account.id === id) {
                return account;
            }
        }

        // Explicit writing
        return undefined;
    };
} 

function logMenu() {
    console.log(`\nMain menu
1: check balance
2: withdraw
3: deposit
4: exit`)
};

// berkaitan, enum
// Enum pattern
const Menu = {   //pascal case
    CHECK_BALANCE: 1, // upper snake case
    WITHDRAW: 2,
    DEPOSIT: 3,
    EXIT: 4,
}

const accountController = new AccountController();
accountController.generateInitialAccounts(10, 100);

while (true) {
    const accountId = +readline.question('Enter an id: ');
    const account = accountController.findAccount(accountId);

    if (!account) {
        continue;
    }

    let choice;

    do {
        logMenu();

        choice = +readline.question('Enter  choice: ');

        switch (choice) {
            case Menu.CHECK_BALANCE: 
                console.log(`The balance is ${account.balance.toFixed(1)}`);
                break;
            case Menu.WITHDRAW:
                const withdrawAmount = +readline.question('Enter an amount to withdraw: ');
                account.withdraw(withdrawAmount);
                break;
            case Menu.DEPOSIT:
                const depositAmount = +readline.question('Enter an amount to deposit: ');
                account.deposit(depositAmount);
                break;
        }

    }   while (choice !== Menu.EXIT);
    
    console.log(' ');
}

// Architecture
// MVC (Model View Controller)

// Model -> menyimpan data, merepresentasikan data
// Controller -> mengontrol model, memakai model

// const account1 = new Account(0, 100);
// const account2 = new Account(1, 70);
// console.log(account1);
// console.log(account2);









































































