const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let index = 0;
let problemNumber = 1;

while (index < input.length) {
  const n = parseInt(input[index]);

  if (n === 0) break;
  index++;

  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(input[index].split(" ").map(Number));
    index++;
  }

  let result = dijkstra(arr, n);
  console.log(`Problem ${problemNumber}: ${result}`);

  problemNumber++;
}

function dijkstra(cave, n) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let priorityQueue = [[cave[0][0], 0, 0]]; // [cost, x, y]
  let distance = Array.from({ length: n }, () => Array(n).fill(Infinity)); // 거리 배열

  while (priorityQueue.length) {
    priorityQueue.sort((a, b) => a[0] - b[0]); // 최소 힙 흉내
    let [currentCost, x, y] = priorityQueue.shift(); // 맨 앞 값을 뺌

    // 이미 처리된 노드면 무시
    if (currentCost > distance[x][y]) continue;

    // 네 방향 이동
    for (let [dx, dy] of directions) {
      let nx = x + dx;
      let ny = y + dy;

      // 이동한 좌표가 유효한지 체크
      if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
        let nextCost = currentCost + cave[nx][ny];

        // 새로운 경로가 기존 경로보다 비용이 적으면 업데이트
        if (nextCost < distance[nx][ny]) {
          distance[nx][ny] = nextCost;
          priorityQueue.push([nextCost, nx, ny]); // 추가
        }
      }
    }
  }

  // 최종 목적지 [N-1][N-1]까지의 최소 비용 반환
  return distance[n - 1][n - 1];
}
