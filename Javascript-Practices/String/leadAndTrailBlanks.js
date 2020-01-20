let input = " hello world  ";

input = input.split("");
for (let item in input) {
  if ((item == 0 || item == input.length - 1) && input[item] == " ") {
    input.splice(item, 1);
  }
}
input = input.join("");

console.log(input);
