function largestLetter(word) {
  const lowercase = word.toLowerCase();
  const theword = lowercase.split("").sort().join("");
  return theword[theword.length - 1];
}

console.log(largestLetter("Lorem ipsum dolore sec avanti"));
console.log(largestLetter("Hello"));
console.log(largestLetter("May the force be with you"));
console.log(largestLetter("It's over nine thousand"));

// Another way
function highestLetter(str) {
  const lowerCaseString = str.toLowerCase();
  const lettersArray = lowerCaseString.split("");
  const sortedLetters = lettersArray.sort();
  return sortedLetters[sortedLetters.length - 1];
}

// Refactoring
function highestLetter(str) {
  const sortedLetters = str.toLowerCase().split("").sort();
  return sortedLetters[sortedLetters.length - 1];
}
