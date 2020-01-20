let input = "hello world";
const char = "o";

function removeFirst(array, character) {
  array = array.split("");
  array.splice(array.indexOf(character), 1);
  array = array.join("");
  return console.log(array);
}

removeFirst(input, char);
