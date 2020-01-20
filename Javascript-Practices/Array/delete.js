const input = [2, 6, 7, 4, 5, 9, 1, 3];
const position = 3;

function search(array, index) {
  if (array.length == 0 && index > array.length) return array;
  else array.splice(index, 1);

  return array;
}

console.log(search(input, position));
