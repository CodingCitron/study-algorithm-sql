const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let [a, b, v] = input.shift().split(' ').map(n => Number(n))

let o = a - b
let ans = v - b

console.log(Math.ceil(ans/o))