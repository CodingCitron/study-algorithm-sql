const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let n = parseInt(input.shift())
let spell = []

input.map(r => spell.push(r.replace('\r', '')))

let string = []

if(spell.length === 1) {
    string = spell[0]
} else {

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < spell[0].length; j++) {
            let char = spell[0][j] 
            string[j] = char

            for(let k = 1; k < n; k++) {
                if(char !== spell[k][j]) {
                    string[j] = "?"
                    break
                }
            }
        }
    }

    string = string.join('')
}

console.log(string)