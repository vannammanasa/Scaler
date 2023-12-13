function bubbleSort(arr){
  var len = arr.length;
  for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
          if(arr[j-1]<arr[j]){
              var temp = arr[j-1];
              arr[j-1] = arr[j];
              arr[j] = temp;
          }
      }
  }
  return arr;
}
console.log(bubbleSort([12,345,4,546,122,84,98,64,9,1,3223,455,23,234,213]));
console.log(bubbleSort([3,6,90,70,58,100,4,6]))