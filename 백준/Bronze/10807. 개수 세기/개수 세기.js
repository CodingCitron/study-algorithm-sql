const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
// /dev/stdin

let [n, m, v] = input

n = Number(n)
v = Number(v)
m = m.split(' ').map(n => Number(n)) 

const map = {}

for(let i = 0; i < m.length; i++) {
    if(map[m[i]] === undefined) {
        map[m[i]] = 1
    } else {
        map[m[i]]++
    }
}

console.log(map[v] === undefined ? 0 : map[v])