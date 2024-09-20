function insertIntoString(str, toInsert, indexes) {
  const charsArray = str.split("");
  let insertCount = 0;

  for (let i = 0; i <= str.length; i++) {
    if (indexes.includes(i)) {
      charsArray.splice(i + insertCount, 0, toInsert);
      insertCount++;
    }
  }
  return charsArray.join("");
}
insertIntoString("capaz utilizar as cápsulas  emergência", "de", [6, 27]);
insertIntoString(
  "Nós decidimos apesar das chances serem baixas que enviaríamos um sinal para [...]",
  ",",
  [13, 45]
);
insertIntoString("Hello", "world", [6]);
insertIntoString("Isso é um teste", "não", []);
