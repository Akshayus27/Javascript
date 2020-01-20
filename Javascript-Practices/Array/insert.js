const input = [2, 6, 7, 4, 5, 9, 1, 3];
const position = 33;
const element = 55;

function search(array, index, item) {
  if (array.length == 0 && index > array.length) array.push(item);
  else array.splice(index, 0, item);

  return array;
}

console.log(search(input, position, element));
