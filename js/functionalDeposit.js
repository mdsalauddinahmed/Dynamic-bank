document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
 1.get the element by id
 2.get the value from the element
 3.convert string value to a number

*/
  const newDepositAmount = getInputValueById("user-Field");
  if(isNaN(newDepositAmount)){
    alert('Enter a valid number')
    return;
}
  // 1.get the previous total

  const preDepositAmount = getElementById("deposit-text");

  // calculate new deposit total
  const totalDeposit = newDepositAmount + preDepositAmount;
  setTextElementValueById("deposit-text", totalDeposit);
  // get the total previous balance by using the function
  const preBalanceTotal = getElementById("balance-total");
  //  console.log(preBalanceTotal)  1240
  const newBalanceTotal = preBalanceTotal + newDepositAmount;
  //console.log(newBalanceTotal)
  setTextElementValueById("balance-total", newBalanceTotal);
});
