const input = "hello world";
const char = "o";
let count = 0;

function occurance(array, character) {
  for (let item in array) {
    if (array[item] == character) count += 1;
    else continue;
  }
  console.log(count);
}

occurance(input, char);
