let arr = [4,7,9,9,-1,6]

function sumArray(arr){

  return arr.reduce((acc,curr) => acc+curr,0);

}

console.log(sumArray(arr))


//without sumArray function

/* const result = arr.reduce(
  function(acc,curr){
    acc = acc+curr
    return acc
  },0);
  
console.log(result);
*/