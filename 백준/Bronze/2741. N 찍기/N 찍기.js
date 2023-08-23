const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input.shift())

// 시관초과
// for(let i = 1; i <= n; i++) {
//     console.log(i)
// }

let array = Array.from(Array(n), (v, k) => k + 1)
console.log(array.join('\n'))