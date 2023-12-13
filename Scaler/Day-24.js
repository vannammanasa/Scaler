//Debouncing helps to improve application performance by calling functions only after a certain amount of pause-time has passed and not on every action.

function debounce(func, delay = 1000) {
  let timeoutId

  return function(...args) {
    //console.log("function called")
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      func(...arguments)
    }, delay)
  }
}

function doSomething() {
  console.log("This is Manasa")
}

const debounced = debounce(doSomething)

debounced();
debounced();


/*function debounce(func, delay){
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timer = setTimeout(() => 
    { func.apply(this, args); }, 
    delay);
  };
}
function saveInput(){
  console.log('Saving data');
}
const myFunc = () =>console.log("This is Manasa");
const result = debounce(myFunc,400);
result();
*/