const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const t = input.shift();
const arr = input.map((str) => str.split(' ').map(Number));

const map = {
  2: [2, 4, 8, 6],
  3: [3, 9, 7, 1],
  4: [4, 6],
  7: [7, 9, 3, 1],
  8: [8, 4, 2, 6],
  9: [9, 1],
};

for (let i = 0; i < t; i++) {
  const a = arr[i][0] % 10;
  const b = arr[i][1];

  if (a === 0) {
    console.log(10);
    continue;
  }

  if ([1, 5, 6].includes(a)) {
    console.log(a);
    continue;
  }

  const cycle = map[a];
  const index =
    b % cycle.length === 0 ? cycle.length - 1 : (b % cycle.length) - 1;

  console.log(cycle[index]);
}
