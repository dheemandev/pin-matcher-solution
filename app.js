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