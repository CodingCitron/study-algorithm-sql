const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input.shift())

let ball = 1

for(let i = 0; i < n; i++) {
    let array = input[i].split(' ').map(n => Number(n))

    if(array.includes(ball)) {
        ball = array.find(n => n !== ball)
    }   
}

console.log(ball)