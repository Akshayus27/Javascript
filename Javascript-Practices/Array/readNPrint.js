const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function print(array, start, len) {
  if (start == len) return;

  console.log(array[start]);

  print(array, start + 1, len);
}

console.log(print(input, 0, input.length));
