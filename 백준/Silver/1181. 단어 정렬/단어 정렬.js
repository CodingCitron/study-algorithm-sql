const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let n = input.shift()
let obj = {}

for(let i = 0; i < input.length; i++) {
    let ri = input[i].trim()
    
    if(!obj[ri.length]) {
        obj[ri.length] = {}
    }

    obj[ri.length][ri] = ri
}

// console.log(Object.keys(obj))
let arr = []
let keys = Object.keys(obj)
for(let i = 0; i < keys.length; i++) {
    // console.log(obj[keys[i]])

    let array = Object.keys(obj[keys[i]])
    array.sort()

    arr = arr.concat(array)
}

console.log(arr.join('\n'))