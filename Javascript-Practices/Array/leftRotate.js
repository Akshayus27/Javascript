const input = [1, 2, 3, 4, 5, 6];
const rotations = 2;

function leftRotate(array, n) {
  for (let i = 0; i < n; i++) {
    let item = array.shift();
    array.push(item);
  }
  return array;
}

console.log(leftRotate(input, rotations));
