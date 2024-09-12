function transformarMatriz(matriz, tamanho) {
  for (let i = 0; i < tamanho; i++) {
    for (let j = 0; j < tamanho; j++) {
      if (i === j) {
        matriz[i][j] = 1; // Elemento da diagonal principal
      } else {
        matriz[i][j] = 0; // Elementos fora da diagonal
      }
    }
  }
  return matriz;
}

const matriz = [
  [5, 8, 2],
  [3, 6, 9],
  [1, 4, 7],
];

console.log(transformarMatriz(matriz, 3));
