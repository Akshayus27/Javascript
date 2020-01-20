const input = 4;

function msb(n) {
  const msb = 1 << 31;
  if (n & msb) return true;
  else return false;
}

console.log(msb(input));
