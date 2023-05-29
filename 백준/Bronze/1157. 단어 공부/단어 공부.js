const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let str = input[0].trim().toUpperCase()

let obj = {}

while(str !== '') {
    let length = str.length
    let first = str[0]

    let newStr = str.replaceAll(first, '')

    obj[str[0]] = length - newStr.length
    str = newStr
}

let max = Math.max(...Object.values(obj))
let spells = []

Object.keys(obj).forEach(key => {
    if(obj[key] === max) spells.push(key)
})

if(spells.length > 1) {
    console.log('?')
} else {
    console.log(spells[0])
}
