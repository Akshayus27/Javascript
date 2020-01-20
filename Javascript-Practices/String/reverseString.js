const input = "hello";
const result = [];

for (let i = input.length - 1; i >= 0; i--) {
  result.push(input[i]);
}

console.log(result.join(""));
