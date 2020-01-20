let input = "hello world";
const char = "l";
const repChar = "s";

function replaceAll(word, character, replacement) {
  word = word.split("");
  for (let i = 0; i < word.length; i++) {
    if (word[i] == character) {
      word.splice(i, 1, replacement);
    }
  }
  word = word.join("");
  return console.log(word);
}

replaceAll(input, char, repChar);
