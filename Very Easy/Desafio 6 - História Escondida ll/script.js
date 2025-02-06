function anotherWord(string) {
  const inverseString = string
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');

  return inverseString;
}

console.log(anotherWord('Lorem ipsum dolore sec avanti'));
console.log(anotherWord('This is an apple'));
console.log(anotherWord('May the force be with you'));
console.log(anotherWord('It s over nine thousando'));
