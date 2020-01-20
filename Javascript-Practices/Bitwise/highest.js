const input = 12;

function highest(n) {
  let highBit;
  for (let i = 0; i < 32; i++) {
    if ((n >> i) & 1) {
      highBit = i;
    }
  }
  return highBit;
}

console.log(highest(input));
