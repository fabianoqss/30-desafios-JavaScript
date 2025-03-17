function fatorial(number) {
  const bigNum = BigInt(number);
  if (bigNum === 0n) {
    return 1n;
  } else {
    return bigNum * fatorial(bigNum - 1n);
  }
}

console.log(fatorial(5));
console.log(fatorial(0));
console.log(fatorial(32));
console.log(fatorial(9n));
