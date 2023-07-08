class BankAccount {
    constructor(name, accountNumber, balance) {
      this.name = name;
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Successfully deposited R${amount} into ${this.accountNumber}`);
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Successfully withdrew R${amount} from ${this.accountNumber}`);
      } else {
        console.log("Insufficient funds!");
      }
    }
  
    getBalance() {
      console.log(`Account Number: ${this.accountNumber}, Balance: R${this.balance}`);
      return this.balance;
    }
  }
  
  const account = new BankAccount("John Doe", "1234567890", 0);
  
  const openDepositForm = document.getElementById("card-deposit");
  const openWithdrawForm = document.getElementById("card-withdraw");
  const depositButton = document.getElementById("depositBtn");
  const withdrawButton = document.getElementById("withdrawBtn");
  const accountDetails = document.getElementById("accountDetails");
  const transactionList = document.getElementById("transactionList");
  
  openDepositForm.addEventListener("click", openDeposit);
  openWithdrawForm.addEventListener("click", openWithdraw);
  depositButton.addEventListener("click", depositAmount);
  withdrawButton.addEventListener("click", withdrawAmount);
  
  function openDeposit() {
    openDepositForm.style.display = "block";
  }
  
  function closeDeposit() {
    openDepositForm.style.display = "none";
  }
  
function openWithdraw() {
    openWithdrawForm.style.display = "block";
}
  
function closeWithdraw() {
    openWithdrawForm.style.display = "none";
}
  
function depositAmount() {
    const depositInputAmount = parseFloat(document.getElementById("amount").value);
  
    if (isNaN(depositInputAmount) || depositInputAmount <= 0) {
      alert("Please enter a valid deposit amount.");
      return;
    }
  
    account.deposit(depositInputAmount);
    accountDetails.textContent = `R ${account.getBalance()}.00`;
  
    const transactionItem = `
      <li class="border mb-2 p-2 rounded list-unstyled justify-content-between">
        <span>Successfully deposited</span>
        <span><strong>R${depositInputAmount.toFixed(2)}</strong></span>
      </li>`;
  
    transactionList.insertAdjacentHTML("beforeend", transactionItem);
}
  
function withdrawAmount() {
    const withdrawInputAmount = parseFloat(document.getElementById("amount").value);
  
    if (isNaN(withdrawInputAmount) || withdrawInputAmount <= 0) {
        alert("Please enter a valid withdrawal amount.");
        return;
    }
  
    account.withdraw(withdrawInputAmount);
    accountDetails.textContent = `R ${account.getBalance()}`;
  
    if (withdrawInputAmount > account.balance) {
        alert("Insufficient funds!");
        return;
    }
  
    const transactionItem = `
        <li class="border mb-2 p-2 rounded list-unstyled justify-content-between">
            <span>Successfully withdrew</span>
            <span><strong>R${withdrawInputAmount.toFixed(2)}</strong></span>
        </li>`;
  
    transactionList.insertAdjacentHTML("beforeend", transactionItem);
}
  