function calculateDigit1(number) {
  const arrayDeDigitos = number.toString().split("").map(Number);
  let somaPar = 0;
  let somaInpar = 0;

  for (let index = 0; index < arrayDeDigitos.length - 1; index++) {
    if (index === 0 || index % 2 === 0) {
      somaPar += arrayDeDigitos[index];
    } else {
      somaInpar += arrayDeDigitos[index];
    }
  }
  const somaFinal = (somaPar * 3 + somaInpar) % 10;
  if (somaFinal === 0) return true;
  const digitoVerificadorEsperado = somaFinal === 0 ? 0 : 10 - somaFinal;
  const digitoVerificadorReal = arrayDeDigitos[arrayDeDigitos.length - 1];
  return digitoVerificadorEsperado === digitoVerificadorReal;
}

console.log(calculateDigit1(547020743789)); // true
console.log(calculateDigit1(301354030348)); //true
console.log(calculateDigit1(301354030349)); //false
console.log(calculateDigit1(123456789872)); //false
console.log("{-----------------Refactoring-----------------}");
// Refactoring
function calculateDigit2(arr) {
  const step1 = arr.reduce(
    (accum, current, index) =>
      index === 0 || index % 2 === 0 ? accum + current : accum,
    0
  );
  const step2 = step1 * 3;
  const step3 =
    step2 +
    arr.reduce(
      (accum, current, index) => (index % 2 !== 0 ? accum + current : accum),
      0
    );

  return step3 % 10 !== 0 ? 10 - (step3 % 10) : 0;
}

function checkVerificationDigit(num) {
  const numbersArray = num.toString().split("").map(Number);
  const numbersArrayWithoutDigit = numbersArray.slice(0, -1);

  const expectedDigit = calculateDigit2(numbersArrayWithoutDigit);

  return expectedDigit === numbersArray[11];
}

console.log(checkVerificationDigit(547020743789)); // true
console.log(checkVerificationDigit(301354030348)); //true
console.log(checkVerificationDigit(301354030349)); //false
console.log(checkVerificationDigit(123456789872)); //false
