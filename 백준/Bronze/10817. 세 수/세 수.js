const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const arr = input[0].split(' ').map(n => parseInt(n))

arr.sort((a, b) => a - b)
console.log(arr[1])