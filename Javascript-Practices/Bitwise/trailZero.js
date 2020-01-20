const input = 8;

function trailZero(n) {
  let count = 0;
  for (let i = 0; i < 32; i++) {
    if ((n >> i) & 1) {
      break;
    }
    count += 1;
  }
  return count;
}

console.log(trailZero(input));
