const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let contain = 'aeiou'
let array = []
for(let i = 0; i < input.length; i++) {
    let str = input[i].trim()
    if(str[0] === '#') break

    let cnt = 0
    for(let j = 0; j < str.length; j++) {
        if(contain.includes(str[j].toLocaleLowerCase())) {
            cnt++
        }
    }
    
    array.push(cnt)
}

console.log(array.join('\n'))