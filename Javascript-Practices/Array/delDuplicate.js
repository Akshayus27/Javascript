const input = [1, 2, 3, 4, 1, 1, 2, 3, 2, 4, 6, 7];

function duplicates(array) {
  for (index in array) {
    let count = 0;
    for (index1 in array) {
      if (array[index1] == array[index]) {
        count += 1;
        if (count > 1) {
          array.splice(index1, 1);
        }
      } else continue;
    }
  }
  return array;
}

console.log(duplicates(input));
