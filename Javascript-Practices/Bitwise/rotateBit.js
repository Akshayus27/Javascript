let input = 16;
let rotations = 2;

function leftRotate(num, rot) {
  return (num << rot) | (num >> (32 - rot));
}

function rightRotate(num, rot) {
  return (num >> rot) | (num << (32 - rot));
}

console.log(
  `Left Rotation: of ${input} by ${rotations} is ${leftRotate(
    input,
    rotations
  )}`
);

console.log(
  `Right Rotation of ${input} by ${rotations} is ${rightRotate(
    input,
    rotations
  )}`
);
