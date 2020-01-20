const input = "hello12@# world34%^";

let vowelCount = 0,
  consonantCount = 0;
for (let item of input) {
  if (item.match(/[aeiou]/)) vowelCount += 1;
  else if (item.match(/[bcdfghjklmnpqrstvwxyz]/)) consonantCount += 1;
  else continue;
}

console.log(`Vowels: ${vowelCount}, Consonant: ${consonantCount}`);
