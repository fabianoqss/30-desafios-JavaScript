// Maybe for-each
function averageNumbers(numeros) {
  let soma = 0;
  for (let index = 0; index < numeros.length; index++) {
    soma += numeros[index];
  }
  return soma / numeros.length;
}

console.log(averageNumbers([10, 9, 6, 8, 9, 1, 5, 7])); // 6.875
console.log(averageNumbers([2, 5, 7, 1, -2])); // 2.6
console.log(averageNumbers([10, 10, 10, 9])); // 9.8
console.log(averageNumbers([25, 75])); // 50

// Refactoring

function average(...numbers) {
  const sum = numbers.reduce((accum, num) => {
    return accum + num;
  }, 0);

  return sum / numbers.length;
}
