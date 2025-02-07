function sortArray(array) {
  const result = array.map((item) => {
    return item.sort((a, b) => a - b);
  });
  const pegaArray = result.reduce(
    (acc, curr) => acc.concat(curr).sort((a, b) => a - b),
    [],
  );

  return pegaArray;
}

console.log(
  sortArray([
    [1, 5, 3],
    [6, 19, 11],
    [47, 128, 5],
    [1, 93, 57, 42, 103],
  ]),
);
console.log(
  sortArray([
    [1, 3],
    [4, 8],
    [7, 5],
    [2, 6],
  ]),
);
console.log(sortArray([[], [], [], []]));
console.log(
  sortArray([
    [100, 50],
    [60, 10],
    [20, 100, 70],
    [10, 40, 80, 90],
  ]),
);
