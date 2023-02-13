// console.log("its worked")
document.getElementById('btn-withdraw').addEventListener('click',function(){
     // step-1
     const withdrawFieldElement= document.getElementById('user-withdraw');
     const newWithFieldStr = withdrawFieldElement.value;
     const newWithdrawAmount = parseFloat(newWithFieldStr)
     // console.log(newDepositAmount)
     withdrawFieldElement.value=''
     if(isNaN(newWithdrawAmount)){
         alert('Enter a number element')
         return
     }
       
     // step-2
     const preWithdrawElement =document.getElementById('withdraw-total');
     const preWithdrawTextStr =preWithdrawElement.innerText;
     //console.log(preDepositTextStr)
     let preWithdrawAmount = parseFloat(preWithdrawTextStr)
     // preDepositAmount=1;
 
      //console.log(typeof preDepositAmount)
     
    //    step-4
 
   const preBalanceElement = document.getElementById('balance-total');
   const preBalanceStr = preBalanceElement.innerText;
   const preBalanceAmount =parseFloat(preBalanceStr)

//    
   if( newWithdrawAmount>preBalanceAmount){
    alert('you have insufficient balance')
    return;
   }
    // step-3
    const currentWithdrawAmount= (newWithdrawAmount+preWithdrawAmount);
    preWithdrawElement.innerText = currentWithdrawAmount;
   
    //   step-5
    const TotalBalance =  preBalanceAmount-newWithdrawAmount;
    preBalanceElement.innerText=TotalBalance;
  
     // step-7
      withdrawFieldElement.value=''
 
 
 
})