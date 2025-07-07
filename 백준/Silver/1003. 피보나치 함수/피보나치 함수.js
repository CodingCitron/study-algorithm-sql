const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const n = Number(input.shift())
const queries = input.map(Number)

// 0 ~ 40 까지 미리 계산
const dp = Array(41).fill(null).map(() => [0,0])

dp[0] = [1,0]  // 0을 출력하는 횟수 1회, 1을 출력하는 횟수 0회
dp[1] = [0,1]  // 0을 출력하는 횟수 0회, 1을 출력하는 횟수 1회

for (let i = 2; i <= 40; i++) {
  dp[i][0] = dp[i-1][0] + dp[i-2][0]
  dp[i][1] = dp[i-1][1] + dp[i-2][1]
}

for (const num of queries) {
  console.log(`${dp[num][0]} ${dp[num][1]}`)
}