function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
for (let i of range(1, 7)) {
  console.log(i);
}