const input = require('fs').readFileSync('/dev/stdin').toString().trim()
let len = 'z'.charCodeAt() - 'a'.charCodeAt() + 1
let array = []

for(let i = 0; i < len; i++) {
    let alpha = String.fromCharCode(i + 97)
    let cnt = 0

    for(let j = 0; j < input.length; j++) {
        if(alpha === input[j].toLowerCase()) {
            cnt++
        }
    }

    array[i] = cnt
}

let maxValue = Math.max(...array)

const ans = array.map((n, index) => {
    if(n === maxValue) {
        return String.fromCharCode(index + 97)
    }    
}).filter(arr => arr !== undefined)

console.log(ans.join(''))