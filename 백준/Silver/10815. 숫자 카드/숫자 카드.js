const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let nums = input[1].split(' ').map(num => Number(num))
let finds = input[3].split(' ').map(num => Number(num))

let min = Math.min(...nums)
let max = Math.max(...nums)

let positive = new Array(max + 1)
let negative = new Array(Math.abs(min))

nums.filter(num => {
    if(num >= 0) {
        positive[num] = num
    } else {
        negative[Math.abs(num)] = num
    }
})

let string = ''

finds.forEach(num => {
    if(num >= 0) {
        if(positive[num] || positive[num] === 0) string += '1 '
        else string += '0 '  
    } else {
        if(negative[Math.abs(num)]) string += '1 '
        else string += '0 '
    }
})

console.log(string.trim())