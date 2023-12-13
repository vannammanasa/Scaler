function  chopString (str, size = str.length) {
  const arr = [];
  let i = 0;
  
  while (i < str.length) {
      arr.push(str.slice(i, i + size));
      i = i + size;
  }

  return arr;
}
console.log(chopString('Scaler',2))
console.log(chopString('ManasaRoyal',3))
console.log(chopString('Javascript',4))