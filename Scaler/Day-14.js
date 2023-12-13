function concatenatingString(word,noOfTimes=1){
  
  
  return noOfTimes > 0 ? word.repeat(noOfTimes) : word
}

console.log(concatenatingString('Ha',3));
console.log(concatenatingString('Manasa',5))
console.log(concatenatingString('Hi'));