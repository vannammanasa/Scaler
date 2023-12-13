function func(promises,timeout){
  return Promise.race([

    Promise.race(promises),
    new Promise((_,reject) => {
      setTimeout(() => reject(new Error("Timed out")),timeout);
    })

  ])
}

const p1 = new Promise((resolve,reject) => {
  setTimeout(() => {
      resolve('The First promise has been resolved');
  }, 1000);

});

const p2 = new Promise((resolve,reject) => {
  setTimeout(() => {
      resolve('The second promise has been resolved');
  }, 3000);
});

func([p1,p2],3000)
  .then(res => console.log("Accepted: ",res))
  .catch(err => console.log("Rejected:",err.message));
