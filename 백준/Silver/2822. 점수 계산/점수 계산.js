const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const numbers = input.map((n, i) => {
    return {
        index: i + 1,
        num: Number(n)
    }
})

numbers.sort((a, b) => b.num - a.num)
const newArray = numbers.filter((obj, index) => {
    if(index < 5) return obj
}).sort((a, b) => a.index - b.index)

let sum = 0
let str = ''

newArray.forEach(obj => {
    sum += obj.num
})

const indexArray = newArray.map(obj => obj.index)

str += sum  + '\n'
str += indexArray.join(' ')

console.log(str)