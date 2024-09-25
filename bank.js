class BankAccount {
  #balance = 0;
  #transactionHistory = [];

  deposit(amount) {
    this.#balance += amount;
    this.#transactionHistory.push(`DEPOSIT: $${amount}`);
    console.log(
      `На счёт внесено: $${amount}. Текущий баланс: $${this.#balance}`
    );
  }

  withdraw(amount) {
    if (this.#balance >= amount) {
      this.#balance -= amount;
      this.#transactionHistory.push(`WITHDRAW: $${amount}`);
      console.log(
        `Со счёта снято: $${amount}. Текущий баланс: $${this.#balance}`
      );
    } else {
      console.log("Недостаточно средств на счёте.");
    }
  }

  getBalance() {
    return this.#balance;
  }

  audit() {
    this.#transactionHistory.forEach((transaction, index) => {
      console.log(`${index + 1}. ${transaction}`);
    });
  }
}

const myAccount = new BankAccount();

myAccount.deposit(1000);

myAccount.withdraw(300);

console.log(`Текущий баланс: $${myAccount.getBalance()}`);

myAccount.audit();
