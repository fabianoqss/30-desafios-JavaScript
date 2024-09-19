function caesarCipher(nome, number) {
  const recebeString = nome.split("");
  const normalizedKey = number % 26;

  const codeArray = recebeString.map((item) => {
    const currentCode = item.charCodeAt(0);
    if (
      currentCode - normalizedKey < 65 &&
      currentCode >= 65 &&
      currentCode <= 90
    ) {
      return currentCode + 26;
    }
    if (
      currentCode - normalizedKey < 96 &&
      currentCode >= 96 &&
      currentCode <= 122
    ) {
      return currentCode + 26;
    }
    return currentCode;
  });
  return codeArray
    .map((code) => String.fromCharCode(code - normalizedKey))
    .join("");
}

console.log(caesarCipher("Vguvg", 2));
console.log(caesarCipher("BCDYZAbcdyza", 27));
console.log(caesarCipher("Qaiik", 60));
console.log(caesarCipher("Amozmlw", 2));
