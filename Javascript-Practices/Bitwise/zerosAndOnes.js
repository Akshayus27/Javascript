let input = 8;
let zero = 0;
one = 0;

for (let i = 0; i < 32; i++) {
  if (input & 1) one++;
  else zero++;
  input = input >> 1;
}
console.log(`Zeros: ${zero}, Ones: ${one}`);
