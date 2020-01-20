let input = " hello world";

for (let item in input) {
  if (item == 0 && input[item] == " ") {
    input = input.split("");
    input.splice(item, 1);
    input = input.join("");
    return console.log(input);
  }
}
