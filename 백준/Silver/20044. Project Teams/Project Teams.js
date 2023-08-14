const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const n = input.shift()
const nums = input[0].split(' ').map(n => Number(n))

nums.sort((a, b) => a - b)

const array = []

for(let i = 0; i < nums.length; i += 2) {
    let front = nums[i]
    let end = nums[nums.length - 1 - i]
    
    array.push(front + end)
}

console.log(Math.min(...array))