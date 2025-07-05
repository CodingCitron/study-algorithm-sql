let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

input = input.map(n => Number(n))

const map = []

input.forEach(n => {
    map[n] = n
})

const empty = []

for(let i = 1; i <= 30; i++) {
    if(map[i] === undefined) {
        empty.push(i)
    }
}

console.log(empty.join('\n'))