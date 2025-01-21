function averageNumbers(...numbers) {
  const retornoTotal = numbers.reduce((acumulador, atual) => {
    return acumulador + atual;
  }, 0);
  return retornoTotal / numbers.length;
}

console.log(averageNumbers(10, 9, 6, 8, 9, 1, 5, 7));
console.log(averageNumbers(2, 5, 7, 1, -2));
console.log(averageNumbers(10, 10, 10, 10, 9));
console.log(averageNumbers(25, 75));
