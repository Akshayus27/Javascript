const input = "hello world, how do you do today?";
const char = "o";
const indices = [];

function occurance(array, character) {
  for (let item in array) {
    if (array[item] == character) indices.push(item);
    else continue;
  }
  console.log(indices.join(" "));
}

occurance(input, char);
