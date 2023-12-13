
let arr = [3,5,-4,-2,8,9,0]

function findFirstNegative(arr){
  return arr.find((x) => x < 0);
}

console.log(findFirstNegative(arr))