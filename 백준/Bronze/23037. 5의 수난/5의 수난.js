const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const numbers = [...input[0]].map(n => Number(n))

let sum = 0

numbers.forEach(num => {
    sum += num ** 5
})

console.log(sum)