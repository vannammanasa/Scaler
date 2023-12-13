function throttle(func, delay) {
  let lastExecutionTime = 0;

  return function(...args) {
    const currentTime = Date.now();

    if (currentTime - lastExecutionTime >= delay) {
      func.apply(...args);
      lastExecutionTime = currentTime;
    }
  };
}


function myFunction(){
  console.log("Function throttled")
}
let throttledFunction = throttle(myFunction,1000);
throttledFunction();
throttledFunction();