const input = [-100, -2, -4, -6, -3, -5, -8, 9, -7, 10];
const len = input.length;

function minimum(array, n) {
  if (n == 1) return array[0];
  else return Math.min(array[n - 1], minimum(array, n - 1));
}

function maximum(array, n) {
  if (n == 1) return array[0];
  else return Math.max(array[n - 1], maximum(array, n - 1));
}

console.log(`Minimum: ${minimum(input, len)}, Maximum: ${maximum(input, len)}`);
