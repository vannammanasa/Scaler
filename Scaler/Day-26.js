let arr = [4,8,9,7,2,6]
//result = []

function calculateTotal(arr){

  const evenNumbers = arr.filter(x => x%2 != 0);

  const squaredNumbers = evenNumbers.map(x =>x * x);

  const total = squaredNumbers.reduce((acc,curr) => acc+curr,0);

  return total;
}

console.log(calculateTotal(arr))
