function clock(){
  let today = new Date();
  let hours = today.getHours().toString().padStart(2,'0');
  let minutes = today.getMinutes().toString().padStart(2,'0');
  let seconds = today.getSeconds().toString().padStart(2,'0');




let clockTime = `${hours}:${minutes}:${seconds}`

console.log(clockTime);
}

setInterval(clock,1000);

//clock();