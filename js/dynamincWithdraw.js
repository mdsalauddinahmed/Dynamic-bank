document.getElementById("btn-withdraw").addEventListener("click", function () {
    /* 
   1.get the element by id
   2.get the value from the element
   3.convert string value to a number
  
  */
    const newWithdrawAmount = getInputValueById("user-withdraw");
    console.log(newWithdrawAmount);
    if(isNaN(newWithdrawAmount)){
        alert('Enter a valid number')
        return;
    }
    // 1.get the previous total
  
    const preWithdrawAmount = getElementById("withdraw-total");
  
   
    // get the total previous balance by using the function
    const preBalanceTotal = getElementById("balance-total");
    //  console.log(preBalanceTotal)  1240
    if(newWithdrawAmount>preBalanceTotal){
        alert("sorry you have insufficient balance")
        return
    }
     // calculate new deposit total
     const totalWithdraw = newWithdrawAmount + preWithdrawAmount;
     setTextElementValueById("withdraw-total", totalWithdraw);
    const newBalanceTotal = preBalanceTotal - newWithdrawAmount;
    //console.log(newBalanceTotal)
    setTextElementValueById("balance-total", newBalanceTotal);
  });
  