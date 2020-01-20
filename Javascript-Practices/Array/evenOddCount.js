const input = [1, 3, 6, 4, 5];

let oddCount = 0,
  evenCount = 0;
for (let item of input) {
  if (item % 2 != 0) oddCount += 1;
  else evenCount += 1;
}

console.log(`Even: ${evenCount}, Odd: ${oddCount}`);
