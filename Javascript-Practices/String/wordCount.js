const input = "hello2345@#$%";

let wordCount = 0;
for (let item of input) {
  if (item.match(/[a-z]/)) wordCount += 1;
  else continue;
}

console.log(`Words: ${wordCount}`);
