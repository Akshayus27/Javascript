const input = [1, 2, 3, 4, 1, 1, 2, 3, 2, 4, 6, 7];
let frequencies = {};
let total = 0;

function duplicates(array) {
  for (item of array) {
    let count = 0;
    for (item1 of array) {
      if (item1 == item) {
        count += 1;
        frequencies[item] = count;
      } else continue;
    }
  }
  Object.keys(frequencies).forEach(key => {
    if (frequencies[key] > 1) total += 1;
  });
  return total;
}

console.log(duplicates(input));
