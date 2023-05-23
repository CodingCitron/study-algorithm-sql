const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n')

let [ N, A, B ] = input[0].split(' ').map(n => parseInt(n))
let cnt = 0

while (N > 0) {
    cnt++
    let check = false
    let tempA = 0
    let tempB = 0

    for(let i = 0; i < N/2; i++) {
        if((i * 2 < A && (i + 1) * 2 >= A)) {
            tempA = i + 1
        }

        if((i * 2 < B && (i + 1) * 2 >= B)) {
            tempB = i + 1
        }

        if((i * 2 < A && (i + 1) * 2 >= A) && 
        (i * 2 < B && (i + 1) * 2 >= B)) {
            check = true
            break
        }
    }

    if(check) break
    N = N/2
    A = tempA
    B = tempB
}

console.log(cnt)