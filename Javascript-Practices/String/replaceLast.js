let input = "hello world";
const char = "o";
const repChar = "s";

function replaceLast(word, character, replacement) {
  const index = word.lastIndexOf(character);
  word = word.split("");
  word.splice(index, 1, replacement);
  word = word.join("");
  return console.log(word);
}

replaceLast(input, char, repChar);
