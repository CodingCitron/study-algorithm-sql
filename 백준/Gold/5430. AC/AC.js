const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const n = input.shift()

const strArr = []
for(let i = 0; i < n; i++) {
    let params = []
    let reverse = false

    for(let j = 0; j <3; j++) {
        let index = (3 * i) + j
        params[j] = input[index].trim() 
    }

    // 실행
    let p2 = params[2].substring(1, params[2].length - 1).split(',')

    for(let j = 0; j < params[0].length; j++) {
        if(params[0][j] === 'R') {
            reverse = !reverse
        } else if(params[0][j] === 'D') {
            if(p2.length === 0 || params[1] == 0) {
                p2 = 'error'
                break
            } else {
                if(reverse)  p2.pop()
                else p2.shift()
            }
        }
    }

    if(p2 !== 'error') {
        if(reverse) {
            p2.reverse()
        }

        p2 = `[${p2.join(',')}]`.trim()
    }
    
    strArr.push(p2)
}

console.log(strArr.join('\n'))