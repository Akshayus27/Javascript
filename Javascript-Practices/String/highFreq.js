const input = "hello world, how do you doing today?";
const frequencies = {};

function occurance(array) {
  for (let item of array) {
    let count = 0;
    for (let item1 of array) {
      if (item1 == item) {
        if (item == " ") continue;
        count += 1;
        frequencies[item] = count;
      } else continue;
    }
  }
  let big = 0,
    result;
  for (let key in frequencies) {
    if (frequencies[key] >= big) {
      big = frequencies[key];
      result = key;
    }
  }
  console.log(result);
}

occurance(input);
