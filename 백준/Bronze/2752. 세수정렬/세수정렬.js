const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const nums = input.shift().split(' ').map(n => Number(n))
nums.sort((a, b) => a - b)
console.log(nums.join(' '))