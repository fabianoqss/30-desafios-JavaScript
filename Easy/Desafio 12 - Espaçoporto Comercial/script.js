function calculaValor(valor) {
  const moedas = [
    {
      500: 500,
      100: 100,
      25: 25,
      10: 10,
      5: 5,
      1: 1,
    },
  ];

  console.log(
    moedas.map((number) => {
      return number;
    }),
  );
}

console.log(calculaValor(500));
