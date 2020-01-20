const input = "hhhheeeellllooo";
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
  let small, result;
  for (let key in frequencies) {
    small = frequencies[key];
    if (frequencies[key] <= small) {
      small = frequencies[key];
      result = key;
    }
  }
  console.log(result);
}

occurance(input);
