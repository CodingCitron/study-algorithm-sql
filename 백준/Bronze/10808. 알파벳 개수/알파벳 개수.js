const input = require('fs').readFileSync('/dev/stdin').toString().trim()

let start = Number('a'.charCodeAt())
let end = Number('z'.charCodeAt())

const alphaArray = Array.from(Array(end - start + 1), (v) => 0)

for(let i = 0; i < input.length; i++) {
    let alphaNum = Number(input[i].charCodeAt())

    const index = alphaNum - start
    alphaArray[index]++
}

console.log(alphaArray.join(' '))