function coordinates([x, y]) {
  const novoArray = [];

  for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= y; j++) {
      novoArray.push([i, j]);
    }
  }
  return novoArray;
}

console.log(coordinates([2, 2]));
console.log(coordinates([2, 7]));
console.log(coordinates([3, -3]));
console.log(coordinates([7, 6]));
