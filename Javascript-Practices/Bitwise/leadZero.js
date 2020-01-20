const input = 1;

function leadZero(n) {
  let count = 0;
  for (let i = 0; i < 32; i++) {
    let msb = 1 << 31;
    if ((n << i) & msb) {
      break;
    }
    count += 1;
  }
  return count;
}

console.log(leadZero(input));
