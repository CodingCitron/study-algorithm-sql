const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

input.shift()
const nums = input.map(n => Number(n))

nums.sort((a, b) => {
    return a - b
})

console.log(nums.join('\n'))
