let input = "hello world";
const char = "o";

function removeLast(array, character) {
  array = array.split("");
  array.splice(array.lastIndexOf(character), 1);
  array = array.join("");
  return console.log(array);
}

removeLast(input, char);
