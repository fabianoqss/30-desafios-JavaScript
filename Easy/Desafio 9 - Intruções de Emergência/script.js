function caracter() {
  const istringui = 'This is Thee';
  const novaString = istringui.replace(' ', '').toLowerCase().split('');
  return novaString;
}
console.log(caracter());
