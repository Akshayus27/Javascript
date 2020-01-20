const input = "hElLo";
let output = "";

for (let item of input) {
  if (item === item.toUpperCase()) {
    output = output.concat(item.toLowerCase());
  } else {
    output = output.concat(item.toUpperCase());
  }
}
console.log(output);
