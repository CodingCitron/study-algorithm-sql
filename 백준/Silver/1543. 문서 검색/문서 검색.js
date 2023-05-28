const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let d = input[0].trim()
let s = input[1].trim()

let first = d.length

d = d.replaceAll(s, '')
console.log((first - d.length)/s.length)