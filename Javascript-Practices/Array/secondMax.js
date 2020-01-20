const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const output = input.sort((a, b) => {
  return b - a;
});

console.log(output[1]);
