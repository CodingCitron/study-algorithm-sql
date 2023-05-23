const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = parseInt(input.shift());
let A = input[0].split(' ').map(n => parseInt(n))
let B = input[1].split(' ').map(n => parseInt(n))

A.sort((a, b) => {
    return a - b;
})

B.sort((a, b) => {
    return b - a;
})

let result = 0

for(let i = 0; i < N; i++) {
    result += A[i] * B[i]
}

console.log(result)
