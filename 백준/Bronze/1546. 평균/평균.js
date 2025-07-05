const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input.shift())
const m = input[0].split(' ').map(n => Number(n))

const max = Math.max(...m)

let sum = 0;

m.forEach(n => {
    sum += n/max * 100
})

console.log(sum/n)