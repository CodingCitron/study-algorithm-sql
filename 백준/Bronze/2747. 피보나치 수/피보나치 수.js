const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let n = parseInt(input[0])
let f = [0, 1]
let result = 0
// 0 1 1 2 3 5 8 13 21 

for(let i = 0; i < n; i++) {
    f.push(f[0] + f[1])
    result = f[1]
    f.shift()
}

console.log(result)