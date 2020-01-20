let input = "hellooworld";
const char = "l";

function removeAll(array, character) {
  array = array.split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] == character) {
      array.splice(i, 1);
      --i;
    }
  }
  array = array.join("");
  return console.log(array);
}

removeAll(input, char);
