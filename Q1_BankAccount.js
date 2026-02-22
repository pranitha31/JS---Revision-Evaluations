function createBankAccount(){
    let balance=0;
    let history=[];

    return{
        deposit(amount){
            if(amount<=0) 
                return "Error:Deposit must be positive";
            balance +=amount;
            history.push({type:"deposite",amount,balance});
            return `Deposited ${amount}`;
        },
        withdraw(amount){
            if(amount <=0)
                return "Error:Withdraw must be positive";
            if (amount>balance)
                return "Error:Insufficient funds";
            history.push({type:"withdraw",amount,balance});
            return `Withdraw ${amount}`;
        },
        getBalance(){
            return balance;
        },
        getTransactionHistory(){
            return history;
        }
    };
}
const account =createBankAccount();
console.log(account.deposit(100));
console.log(account.withdraw(50));
console.log(account.getBalance());
console.log(account.getTransactionHistory());
