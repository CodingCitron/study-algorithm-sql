let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let arr = []
input = input.map(str => str.trim())

for(let i = 0; i < input.length; i++) {
    if(input[i] === '0') break

    let cnt = 0
    for(let j = 0; j < Math.ceil(input[i].length/2); j++) {
        let l = input[i].length - 1 
        if(input[i][j] !== input[i][l - j]) cnt++
    }

    if(cnt === 0) arr.push('yes')
    else arr.push('no')
}

console.log(arr.join('\n'))