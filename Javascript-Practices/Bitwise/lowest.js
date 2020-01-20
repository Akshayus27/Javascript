const input = 22;

function lowest(n) {
  let lowBit;
  for (let i = 0; i < 32; i++) {
    if ((n >> i) & 1) {
      lowBit = i;
      break;
    }
  }
  return lowBit;
}

console.log(lowest(input));
