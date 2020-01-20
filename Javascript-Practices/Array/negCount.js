const input = [1, 3, -6, -1, 4, 5, 6, -3, -45];

let count = 0;
for (let item of input) {
  if (item < 0) count += 1;
}

console.log(count);
