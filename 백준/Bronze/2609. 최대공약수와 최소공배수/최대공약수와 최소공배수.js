const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let [ a, b ] = input[0].split(' ').map(num => Number(num))

function find(num) {
    let array = []
    for(let i = 0; i <= num; i++) {
        if(num % i === 0) array.push(i)
    }

    return array
}

let aList = find(a)
let bList = find(b)

let gcd = 0

for(let i = aList.length - 1; i >= 0; i--) {
    if(bList.findIndex(n => n === aList[i]) !== -1) {
        gcd = aList[i]
        break
    }
}

let lcm = (a * b)/gcd 

console.log(gcd + '\n' + lcm)