function reverseAndLowerCase(word) {
  const reversedWord = word.split(" ");
  const nextWord = reversedWord.map((word) => {
    const lowerCaseWord = word.toLowerCase();
    return lowerCaseWord.split("").reverse().join("");
  });
  return nextWord.join(" ");
}

console.log(reverseAndLowerCase("Lorem ipsum dolore sec avanti"));
console.log(reverseAndLowerCase("This is an apple"));
console.log(reverseAndLowerCase("May the force be with you"));
console.log(reverseAndLowerCase("It's over nine thousand"));

//Refactoring

function invertWord(word) {
  return word.toLowerCase().split("").reverse().join("");
}

function invertWords(str) {
  return str.split(" ").map(invertWord).join(" ");
}
