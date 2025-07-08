const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const n = input.shift()

let result

for(let i = 0; i < n; i++) {
    let [p, s] = input[i].split(' ')
    s = Number(s)

    if(result === undefined) {
        result = [p, s]
    } else {
        if(result[1] > s) {
            result = [p, s]
        } 
    }
}

console.log(result[0])
