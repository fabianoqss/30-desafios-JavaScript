function dividingcoins(number) {
  let res = 0;
  let coins = [500, 100, 25, 10, 5, 1];
  let resultado = {
    500: 0,
    100: 0,
    25: 0,
    10: 0,
    5: 0,
    1: 0,
  };

  for (let index = 0; index < coins.length; index++) {
    if (number / coins[index] > 0) {
      res = parseInt(number / coins[index]);
      number = number - res * coins[index];
      resultado[coins[index]] = res;
    }
  }
  return resultado;
}

console.log(dividingcoins(478));
console.log(dividingcoins(384));
console.log(dividingcoins(5412));
console.log(dividingcoins(50));
