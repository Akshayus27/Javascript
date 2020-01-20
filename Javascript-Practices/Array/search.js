const input = [2, 6, 7, 4, 5, 9, 1, 3];
const searchElement = 12;

function search(array, element) {
  if (element in array) return true;
  else return false;
}

console.log(search(input, searchElement));
