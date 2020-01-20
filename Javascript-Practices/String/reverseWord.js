const input = "hello123@#";
const wordArray = [];
const newArray = input.split("");

for (let i = input.length - 1; i >= 0; i--) {
  if (input[i].match(/[a-z]/)) {
    wordArray.push(input[i]);
    newArray.shift();
  } else continue;
}

const result = [...wordArray, ...newArray];
console.log(result.join(""));
