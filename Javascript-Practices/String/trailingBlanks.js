let input = " hello world ";

for (let item in input) {
  if (item == input.length - 1 && input[item] == " ") {
    input = input.split("");
    input.splice(item, 1);
    input = input.join("");
    return console.log(input);
  }
}
