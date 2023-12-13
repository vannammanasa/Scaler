
let arr = [4,6,8,6,9,10,34]


function allPositive(arr){
  return arr.every((x => x >0));
}

console.log(allPositive(arr))