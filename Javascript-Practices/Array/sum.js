const input = [1, 2, 3, 4, 5];

function print(array, start, len) {
  if (start == len - 1) return array[start];

  return array[start] + print(array, start + 1, len);
}

console.log(print(input, 0, input.length));
