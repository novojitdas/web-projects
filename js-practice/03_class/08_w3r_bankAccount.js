/*
Write a JavaScript program that creates a class called "BankAccount" 
with properties for account number and balance. 
Include methods to deposit and withdraw money from the account. 
Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.
*/

class BankAccount {
      constructor(accountNumber,balance) {
                  this.accountNumber = accountNumber;
                  this.balance = balance;
      }
      deposit(amount) {
            this.balance = this.balance + amount;
            return `deposited ${amount} and current balance ${this.balance}`;
      }
      withdraw(amount) {
            if(amount<= this.balance) {
            this.balance = this.balance - amount;
            return `${amount} withdrawed from account and current balance ${this.balance}`;
            } else {
                  return `insufficent balance: tried to withdraw ${amount}`;
            }
      }
}

const novojit = new BankAccount(1,100);
console.log(novojit.deposit(100));
console.log(novojit.withdraw(201));