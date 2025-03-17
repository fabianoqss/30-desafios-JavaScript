function qualquerum(array) {
  if (array[0] < 0 || array[1] < 0) {
    return [];
  }
  let newArray = [];
  for (let x = 0; x <= array[0]; x++) {
    for (let y = 0; y <= array[1]; y++) {
      newArray.push([x, y]);
    }
  }
  return newArray;
}

console.log(qualquerum([2, 2]));
console.log(qualquerum([2, 7]));
console.log(qualquerum([-3, -3]));
console.log(qualquerum([7, 6]));
