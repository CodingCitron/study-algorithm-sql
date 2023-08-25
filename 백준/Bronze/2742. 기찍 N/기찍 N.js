const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input.shift())
let str = ''

for(let i = 0; i < n; i++) {
    str += n - i + '\n'
}

console.log(str)