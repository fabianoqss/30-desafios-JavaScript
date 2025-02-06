function receiveNumbers(numbers) {
  const any = String(numbers).split('');
  const reverted = any.map((value) => {
    return Number(value * value);
  });

  return reverted.join('');
}

console.log(receiveNumbers(3514));
console.log(receiveNumbers(94571));
console.log(receiveNumbers(24));
console.log(receiveNumbers(745821698));
