const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const n = input.shift()
const result = []

for(let i = 0; i < n; i++) {
    const [a, b] = input[i].split(" ").map(n => Number(n))
    const num = Math.round(factorial(b)/(factorial((a)) * factorial((b - a))))
    result.push(num)
}


function factorial(n) {
    if(n === 1 || n === 0) {
        return 1
    }

    return n * factorial(n - 1)
}

console.log(result.join('\n'))