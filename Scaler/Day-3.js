function givenRangeOfIntegers(a,b){
  if((a >= 50 && a <= 99) || (b >= 50 && b <= 99)){
    return true
  }
  else{
    return false
  }
}

console.log(givenRangeOfIntegers(44,100))
console.log(givenRangeOfIntegers(57,89))