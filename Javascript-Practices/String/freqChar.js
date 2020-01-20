const input = "hello world";
const frequencies = {};

function occurance(array) {
  let count = 0;
  for (let item of array) {
    for (let item1 of array) {
      if (item1 == item) {
        if (item == " ") continue;
        count += 1;
        frequencies[item] = count;
      } else continue;
    }
    count = 0;
  }
  console.log(frequencies);
}

occurance(input);
