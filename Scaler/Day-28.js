let info ={
  name:"Manasa Royal",
  place:"India"
}

let handler = new Proxy(info,{
  get:function(target,property,receiver){
    return Reflect.get(target, property,receiver);

  },
});

console.log(handler.name);
console.log(handler.place)