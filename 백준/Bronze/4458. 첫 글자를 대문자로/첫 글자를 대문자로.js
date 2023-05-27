const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const n = parseInt(input.shift())

for(let i = 0; i < n; i++) {
    let str = input[i]
    console.log(str.charAt(0).toUpperCase() + str.slice(1))
}