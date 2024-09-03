const matrix = [
  [1, 5, 3],
  [6, 19, 11],
  [47, 128, 5],
  [1, 93, 57, 42, 103],
];

const matrix2 = [
  [1, 3],
  [4, 8],
  [7, 5],
  [2, 6],
];

const matrix3 = [[], [], [], []];

const matrix4 = [
  [100, 50],
  [60, 100],
  [20, 100, 70],
  [10, 40, 80, 90, 100],
];

function flatAndSort1(matriz) {
  let recebeMatriz = [];

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      recebeMatriz.push(matriz[i][j]);
    }
  }
  let matrizSort = recebeMatriz.sort((a, b) => a - b);
  return matrizSort;
}

console.log(flatAndSort1(matrix));
console.log(flatAndSort1(matrix2));
console.log(flatAndSort1(matrix3));
console.log(flatAndSort1(matrix4));

//Refactoring

function flatAndSort2(arr) {
  const newArray = [];

  arr.forEach((numbers) => {
    newArray.push(...numbers);
  });

  return newArray.sort((a, b) => a - b);
}
