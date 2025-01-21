function recursao(number) {
  if (number === 1) {
    return 'chunk';
  }

  return 'chunk-' + recursao(number - 1);
}

console.log(recursao(4));
console.log(recursao(1));
console.log(recursao(8));
console.log(recursao(2));
