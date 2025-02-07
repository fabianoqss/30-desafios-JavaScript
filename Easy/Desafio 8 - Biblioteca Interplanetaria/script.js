function library(namenormal) {
  const peganame = namenormal.split(' ');

  const initials = peganame.reduce((acc, word, index, array) => {
    if (index < array.length - 1) {
      acc += word.charAt(0).toUpperCase() + '.';
    }
    return acc;
  }, '');
  const lastname = peganame[peganame.length - 1].toUpperCase();

  return `'${lastname}, ${initials}'`;
}

console.log(library('Isaac Larrubia Ferreira Pontes'));
console.log(library('John Ronald Reuel Tolkien'));
console.log(library('christopher james paolini'));
console.log(library('Suzanne Marie Collins'));
