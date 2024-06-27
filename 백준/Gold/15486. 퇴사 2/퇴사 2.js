const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input.shift());

const tp = input.map((str) => str.split(" ").map(Number));

const dp = Array.from({ length: n + 1 }).fill(0);
let max = 0;

for (let i = 0; i < n; i++) {
  max = Math.max(max, dp[i]);

  const [t, p] = tp[i];

  if (i + t <= n) {
    dp[i + t] = Math.max(dp[i + t], max + p);
  }
}

console.log(Math.max(...dp));