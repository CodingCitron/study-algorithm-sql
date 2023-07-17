const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const command = {
    push: (val) => {
        array.push(val[1])
    },
    pop: () => {
        let val = array.length === 0 ? -1 : array.pop()
        strArr.push(val)
        return val
    },
    size: () => {
        let val = array.length
        strArr.push(val)
        return val
    },
    empty: () => {
        let val = array.length === 0 ? 1 : 0
        strArr.push(val)
        return val
    },
    top: () => { 
        let val = array.length === 0 ? -1 : array[array.length - 1] 
        strArr.push(val)
        return val
    },
}

const array = []
const strArr = []

const n = Number(input.shift())
// console.log(input.map(arr => ))

for(let i = 0; i < n; i++) {
    const orderAndValue = input[i].split(' ').map(arr => arr.trim())
    command[orderAndValue[0]](orderAndValue)
}

console.log(strArr.join('\n'))

