function getInputValueById(inputId){
    const depositFieldElement= document.getElementById(inputId);
    const newDepositFieldStr =depositFieldElement.value;
    const inputFieldValue = parseFloat(newDepositFieldStr)
    depositFieldElement.value=''
    return inputFieldValue;
 }

 function getElementById(elementId){
    const element =document.getElementById(elementId);
    const elementStr =element.innerText;
    const elementValue =parseFloat(elementStr)
    return elementValue;
 }

 function setTextElementValueById(elementId,newValue){
    const textElement = document.getElementById(elementId)
    textElement.innerText=newValue;
 }