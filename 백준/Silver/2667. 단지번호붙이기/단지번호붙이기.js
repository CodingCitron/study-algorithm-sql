const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input.shift());
const arr = input.map((item) => item.trim().split('').map(Number));
const check = Array.from({ length: n }, () => Array(n).fill(0));
const d = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let cnt = 0;
const sizes = [];

function bfs(y, x) {
  const queue = [[y, x]];
  check[y][x] = cnt;
  let size = 1;

  while (queue.length > 0) {
    const [cy, cx] = queue.shift();

    for (const [dy, dx] of d) {
      const ny = cy + dy;
      const nx = cx + dx;

      if (
        ny >= 0 &&
        ny < n &&
        nx >= 0 &&
        nx < n &&
        arr[ny][nx] === 1 &&
        check[ny][nx] === 0
      ) {
        queue.push([ny, nx]);
        check[ny][nx] = cnt;
        size++;
      }
    }
  }

  return size;
}

// 전체 배열 순회하면서 bfs 실행
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === 1 && check[i][j] === 0) {
      cnt++;
      sizes.push(bfs(i, j));
    }
  }
}

// 오름차순 정렬
sizes.sort((a, b) => a - b);

console.log(sizes.length);
sizes.forEach((s) => console.log(s));
