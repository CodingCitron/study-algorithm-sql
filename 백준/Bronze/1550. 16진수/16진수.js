const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let n = input.shift()
console.log(parseInt(n, 16))