function inverseArray(array) {
  const newArray = [];

  for (let index = 0; index < array.length; index++) {
    newArray[index] = array[array.length - 1 - index];
  }

  return newArray;
}

console.log(inverseArray([0, 9, 6, 8, 9, 1, 5, 7]));
console.log(inverseArray(['Oh', 'Hi', 'Mark']));
console.log(inverseArray([false, true, true, true]));
console.log(inverseArray(["it's", 'not', true, 0]));
