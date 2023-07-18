const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const n = input.shift()

const array = []
const strArr = []
const method = {
    push_front: (val) => {
        array.unshift(val[1])
    }, 
    push_back: (val) => {
        array.push(val[1])
    },
    pop_front: () => {
        const str = array.length === 0 ? -1 : array.shift()  
        strArr.push(str)
    },
    pop_back: () => {
        const str = array.length === 0 ? -1 : array.pop()  
        strArr.push(str)
    },
    size: () => {
        strArr.push(array.length)
    },
    empty: () => {
        const str = array.length === 0 ? 1 : 0
        strArr.push(str)
    },
    front: () => {
        const str = array.length === 0 ? -1 : array[0]
        strArr.push(str)
    },
    back: () => {
        const str = array.length === 0 ? -1 : array[array.length - 1]
        strArr.push(str)        
    },
}

for(let i = 0; i < n; i++) {
    const o = input[i].split(' ').map(str => str.trim())
    method[o[0]](o)
}

console.log(strArr.join('\n'))