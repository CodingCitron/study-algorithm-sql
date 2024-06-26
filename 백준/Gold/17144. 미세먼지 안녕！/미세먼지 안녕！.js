const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [R, C, T] = input[0].split(" ").map(Number);
const map = [];
let airCleaner = [];

// 초기 배열 설정
for (let i = 1; i <= R; i++) {
  const row = input[i].split(" ").map(Number);
  map.push(row);
  if (row[0] === -1) {
    airCleaner.push(i - 1);
  }
}

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

// 미세먼지 확산 함수
function spreadDust() {
  const tempMap = Array.from(Array(R), () => Array(C).fill(0));
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (map[i][j] > 0) {
        const amount = Math.floor(map[i][j] / 5);
        for (const [dx, dy] of directions) {
          const nx = i + dx;
          const ny = j + dy;
          if (nx >= 0 && nx < R && ny >= 0 && ny < C && map[nx][ny] !== -1) {
            tempMap[nx][ny] += amount;
            map[i][j] -= amount;
          }
        }
        tempMap[i][j] += map[i][j];
      } else if (map[i][j] === -1) {
        tempMap[i][j] = -1;
      }
    }
  }
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      map[i][j] = tempMap[i][j];
    }
  }
}

// 공기청정기 작동 함수
const cleaner = () => {
  const [upper, lower] = airCleaner;

  // 위쪽 공기청정기 (반시계 방향)
  for (let i = upper - 1; i > 0; i--) map[i][0] = map[i - 1][0];
  for (let i = 0; i < C - 1; i++) map[0][i] = map[0][i + 1];
  for (let i = 0; i < upper; i++) map[i][C - 1] = map[i + 1][C - 1];
  for (let i = C - 1; i > 1; i--) map[upper][i] = map[upper][i - 1];
  map[upper][1] = 0;

  // 아래쪽 공기청정기 (시계 방향)
  for (let i = lower + 1; i < R - 1; i++) map[i][0] = map[i + 1][0];
  for (let i = 0; i < C - 1; i++) map[R - 1][i] = map[R - 1][i + 1];
  for (let i = R - 1; i > lower; i--) map[i][C - 1] = map[i - 1][C - 1];
  for (let i = C - 1; i > 1; i--) map[lower][i] = map[lower][i - 1];
  map[lower][1] = 0;
};

// T시간 동안 시뮬레이션 수행
for (let t = 0; t < T; t++) {
  spreadDust();
  cleaner();
}

// 최종 미세먼지 양 계산
let totalDust = 0;
for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (map[i][j] > 0) {
      totalDust += map[i][j];
    }
  }
}

console.log(totalDust);
