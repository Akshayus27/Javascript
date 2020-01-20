const input = [1, 3, 6, 4, 5];

const oddArray = [],
  evenArray = [];
for (let item of input) {
  if (item % 2 != 0) oddArray.push(item);
  else evenArray.push(item);
}

console.log(`Even: ${evenArray}, Odd: ${oddArray}`);
