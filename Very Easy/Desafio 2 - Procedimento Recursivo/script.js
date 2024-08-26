function recursiveProcedure(quantity) {
  if (quantity === 1) {
    return "chunk";
  }
  return "chunk" + "-" + recursiveProcedure(quantity - 1);
}

console.log(recursiveProcedure(4));
console.log(recursiveProcedure(1));
console.log(recursiveProcedure(8));
console.log(recursiveProcedure(2));

// Refactoring

function recursiveProcedure2(num) {
  if (num === 0) return "";
  return num === 1 ? "chunk" : "chunk-" + recursiveChunks(num - 1);
}
