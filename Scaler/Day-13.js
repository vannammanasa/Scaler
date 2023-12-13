const memoize = func => {
  const cache = {};
  return (...args) => {
  console.log(cache)
     let strKey = args.join(',');
      if(!cache[strKey]){
        console.log('adding to cache!');
        cache[strKey] = func.apply(this, args);
      } 
       console.log('fetching from cache!');
       return cache[strKey];
   };
}

const add = (...args) => {
  return args.reduce((s, e) => {
    return s += e;
  }, 0);
}

const memoizedAddFunction = memoize(add);

memoizedAddFunction(1, 2, 3);
memoizedAddFunction(1, 2, 3);
memoizedAddFunction(4, 2, 3);
memoizedAddFunction(8, 2, 3);
