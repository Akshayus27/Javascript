let num1 = 12;
let num2 = 14;

function swap(a, b) {
  a = a ^ b;
  b = b ^ a;
  a = a ^ b;
  return console.log(`num1 = ${a}, num2 = ${b}`);
}

swap(num1, num2);
