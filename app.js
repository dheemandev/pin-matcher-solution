function getPin(){
  const pin = Math.round(Math.random()* 1000)
  const pinString = pin + '';
  if(pinString.length == 3){
    return pin
  }
  else {
    return getPin();
  }
}

function generatePin(){
  const pin= getPin();
  document.getElementById('display-pin').value = pin;
}

document.getElementById('calculator-pin').addEventListener('click',function(event){
  const number = event.target.innerText;
  const cal = document.getElementById('typed-numbers')

  if(isNaN(number)){
    console.log(number);
    if(number == 'C'){
      cal.value = '';
    }
  }
  else{
    const previousCal = cal.value;
    const newCal = previousCal + number
    cal.value = newCal;
  
  }
  
})

document.getElementById('submit-btn').addEventListener('click', function(){
   const pin = document.getElementById('display-pin').value ;
   const typedNumbers = document.getElementById('typed-numbers').value ;
   const successNotify = document.getElementById('notify-success')
   const failNotify = document.getElementById('notify-fail')

   if(pin== typedNumbers){
    
    successNotify.style.display = 'block'
    failNotify.style.display = 'none'

   }
   else{
    
    failNotify.style.display = 'block'
    successNotify.style.display = 'none'

   }
})