const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const n = input.shift()

const action = {
    push: (val) => {
        array.push(val[1])
    },
    pop: () => {
        if(array.length === 0) {
            return -1
        } else {
            return array.shift()
        }
    },
    size: () => {
        return array.length
    },
    empty: () => {
        if(array.length === 0) {
            return 1
        } else {
            return 0
        }
    },
    front: () => {
        if(array.length > 0) {
            return array[0]
        } else {
            return -1
        }
    },
    back: () => {
        if(array.length > 0) {
            return array[array.length - 1]
        } else {
            return -1
        }
    },
} 

const array = []
let strArray = []

for(let i = 0; i < n; i++) {
    const val = input[i].split(' ').map(arr => arr.trim())
    // console.log(order, value)

    const returnValue = action[val[0]](val)
    if(returnValue !== undefined) strArray.push(returnValue)
}

console.log(strArray.join('\n'))