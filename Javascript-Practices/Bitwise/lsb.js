const input = 7;

function lsb(n) {
  if (n & 1) return true;
  else return false;
}

console.log(lsb(input));
