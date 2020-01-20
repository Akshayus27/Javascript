let input = "hello world";
const char = "o";
const repChar = "s";

function replaceFirst(word, character, replacement) {
  const index = word.indexOf(character);
  word = word.split("");
  word.splice(index, 1, replacement);
  word = word.join("");
  return console.log(word);
}

replaceFirst(input, char, repChar);
