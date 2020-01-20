const input = "mom";
const result = [];

for (let i = input.length - 1; i >= 0; i--) {
  result.push(input[i]);
}

const palindromeCheck = result.join("");
console.log(input === palindromeCheck);
