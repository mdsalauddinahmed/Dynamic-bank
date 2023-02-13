// console.log("hello world")

document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-1
    const depositFieldElement= document.getElementById('user-Field');
    const newDepositFieldStr =depositFieldElement.value;
    const newDepositAmount = parseFloat(newDepositFieldStr)
    // console.log(newDepositAmount)
    if(isNaN(newDepositAmount)){
        alert('Enter a number element')
        return
    }
      
    // step-2
    const preDepositElement =document.getElementById('deposit-text');
    const preDepositTextStr =preDepositElement.innerText;
    //console.log(preDepositTextStr)
    let preDepositAmount = parseFloat(preDepositTextStr)
    // preDepositAmount=1;

     //console.log(typeof preDepositAmount)
    
    // step-3
    const currentDepositAmount= (newDepositAmount+preDepositAmount);
    preDepositElement.innerText = currentDepositAmount;

   //    step-4

  const preBalanceElement = document.getElementById('balance-total');
  const preBalanceStr = preBalanceElement.innerText;
  const preBalanceAmount =parseFloat(preBalanceStr)
   //   step-5
   const TotalBalance = newDepositAmount+preBalanceAmount;
   preBalanceElement.innerText=TotalBalance;
 
    // step-7
    depositFieldElement.value=''



})