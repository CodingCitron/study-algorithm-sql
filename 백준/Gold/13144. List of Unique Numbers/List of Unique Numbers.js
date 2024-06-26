const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = input.shift();
let arr = input[0].split(" ").map(Number);

let n = arr.length;
let start = 0;
let end = 0;
let seen = new Set();
let count = 0;

while (end < n) {
  // 중복 요소가 있는 경우 start 포인터를 이동
  while (seen.has(arr[end])) {
    seen.delete(arr[start]);
    start++;
  }

  // 중복 요소가 없으면 요소 추가
  seen.add(arr[end]);
  // 현재 end 위치에서의 부분 배열의 개수를 더함
  count += end - start + 1;
  end++;
}

console.log(count);