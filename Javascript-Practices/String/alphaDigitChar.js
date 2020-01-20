const input = "hello2345@#$";
let alphaCount = 0,
  digitCount = 0,
  charCount = 0;

for (let item of input) {
  if (item.toLowerCase().match(/[a-z]/)) alphaCount += 1;
  else if (item.match(/[0-9]/)) digitCount += 1;
  else charCount += 1;
}

console.log(
  `Aplhabets: ${alphaCount}, Digits: ${digitCount}, Special Character: ${charCount}`
);
