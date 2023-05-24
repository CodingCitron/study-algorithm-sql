const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [a, b] = input[0].split(' ').map(n => parseInt(n))

let arr = []

for(let i = 0; i <= 1000; i++) {
    for(let j = 0; j < i; j++) {
        arr.push(i)

        if(arr.length > 1000) break
    }

    if(arr.length > 1000) break
}

let sum = 0
for(let i = a - 1; i < b; i++) {
    sum += arr[i]
}

console.log(sum)