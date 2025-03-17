function numberisValid(number) {
  const arrayofNumbers = number.toString().split('').map(Number);

  const par = arrayofNumbers.reduce((acumulador, valorAtual, index) => {
    return index % 2 === 0 ? acumulador + valorAtual : acumulador;
  }, 0);

  const impar = arrayofNumbers.reduce((acumulador, valorAtual, index) => {
    return index % 2 !== 0 ? acumulador + valorAtual : acumulador;
  }, 0);

  const newNumber = (par * 3 + impar) / 10;

  const digitoVerificador = newNumber % 10 === 0 ? 0 : 10 - (newNumber % 10);

  const numberArrayWithDigit = arrayofNumbers.slice(0, -1);

  return digitoVerificador === arrayofNumbers[numberArrayWithDigit.length - 1];
}

console.log(numberisValid(547020743789));
console.log(numberisValid(301354030348));
console.log(numberisValid(301354030349));
console.log(numberisValid(123456789872));
