
let arr = [5,7,8,9,2,4,11,16,13]

function filterOutOdd(arr){
  return arr.filter(x =>x%2 === 0)

}

console.log(filterOutOdd(arr))