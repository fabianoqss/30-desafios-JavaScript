function receiveNumbers(numbers) {
  const any = numbers.map((number) => number * number);
  const result = any.join('');

  return result;
}

console.log(receiveNumbers(3514));
console.log(receiveNumbers(94571));
console.log(receiveNumbers(24));
console.log(receiveNumbers(745821698));
