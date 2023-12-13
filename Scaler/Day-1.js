
let num = 32243;

function reverseNumber(num){
    
       let  result = num.toString().split('').reverse().join('');
        return result;
}
let reversing = reverseNumber(32243);
console.log(reversing)