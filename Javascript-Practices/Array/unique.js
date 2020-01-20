const input = [1, 2, 3, 4, 1, 1, 2, 3, 2, 4, 6, 7];
let frequencies = {};
const unique = [];

function uniques(array) {
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
    if (!(frequencies[key] > 1)) unique.push(key);
  });
  return unique;
}

console.log(uniques(input));
