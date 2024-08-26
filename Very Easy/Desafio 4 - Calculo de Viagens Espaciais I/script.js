function digits(number) {
  const parseString = number.toString();
  let result = "";

  for (let i = 0; i < parseString.length; i++) {
    const digito = parseString[i];
    const square = digito * digito;
    result += square;
  }

  return Number(result);
}

console.log(digits(3514));
console.log(digits(94571));
console.log(digits(24));
console.log(digits(745821698));

// Improved function

function squareDigits(num) {
  const str = num.toString();
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += Math.pow(+str[i], 2).toString();
  }

  return Number(result);
}

console.log(squareDigits(3514));
console.log(squareDigits(94571));
console.log(squareDigits(24));
console.log(squareDigits(745821698));

//Refactoring
function squareDigits(num) {
  const digitsString = num.toString();
  const digitsArray = digitsString.split("");
  const squaredArray = digitsArray.map((number) => number ** 2);
  const squaredString = squaredArray.join("");
  return Number(squaredString);
}

// Chaining functions

function squareDigits(num) {
  const digitsArray = num.toString().split("");
  return Number(digitsArray.map((number) => number ** 2).join(""));
}
