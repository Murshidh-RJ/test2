const prompt = require("prompt-sync")();










const deposit = () => {
  while (true){
   const depositAmount = prompt("Enter a deposit amount: ");
   const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
    console.log("invalid deposit amount,try again.")
    }else{
      return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true){
    const lines = prompt("Enter the number of lines you want to bat on (1 - 3) : ");
    const numberOfLines = parseFloat(lines);
 
     if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines >3){
     console.log("invalid number of lines,try again.")
     }else{
       return numberOfLines;
     }
   }
 };

 const getBet = (balance,lines) => {
  while (true){
    const bet = prompt("Enter the amount you want to bet per line :");
    const numberBet = parseFloat(bet);
 
     if (isNaN(numberBet) || numberBet <= 0 || numberBet >(balance/lines)){
     console.log("Total bet amount is exeeding the balance amout. Enter An amount less than "+ (balance/lines)+".")
     }else{
       return numberBet;
     }
   }
 };


let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance,numberOfLines)
