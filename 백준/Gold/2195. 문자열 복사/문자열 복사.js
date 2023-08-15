const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const S = input[0].trim()
const P = input[1].trim()

let index = 0
let cnt = 0

for(let i = 0; i < P.length; i++) {
    if(S.indexOf(P.slice(index, i + 1)) !== -1) continue
    cnt++
    index = i
}

console.log(cnt + 1)