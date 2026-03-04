function relatorio(frase, palavra, array) {
  const novaVariável = frase.split(' ');
  novaVariável.splice(palavra, ...array, 0);

  return novaVariável;
}

console.log(relatorio('capaz utilizar as cápsulas emergência', [6, 27], 'de'));
