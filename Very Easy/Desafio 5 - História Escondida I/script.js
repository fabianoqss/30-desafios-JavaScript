function theBigestLetter(string) {
  const anotherWord = string.replace(' ', '').split('').sort().pop();

  return anotherWord;
}

console.log(theBigestLetter('Lorem ipsum dolore sec avanti'));
console.log(theBigestLetter('Hello'));
console.log(theBigestLetter('May the force be with you'));
console.log(theBigestLetter('Its over nine thousand'));
