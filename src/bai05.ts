//bai 05
export class BankAccount {
  balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount: number) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    }
  }
}