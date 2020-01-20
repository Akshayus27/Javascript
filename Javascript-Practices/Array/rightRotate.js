const input = [1, 2, 3, 4, 5, 6];
const rotations = 2;

function rightRotate(array, n) {
  for (let i = 0; i < n; i++) {
    let item = array.pop();
    array.unshift(item);
  }
  return array;
}

console.log(rightRotate(input, rotations));
