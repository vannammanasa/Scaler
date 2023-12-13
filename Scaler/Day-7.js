function checkPair(num1,num2){
  if(num1 === 50 || num2 === 50  || (num1+num2 === 50)){
    return true
  }
  else{

  
    return false
  }
}

console.log(checkPair(40,60))
console.log(checkPair(50,50))
console.log(checkPair(20,30))