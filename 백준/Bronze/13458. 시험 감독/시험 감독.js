const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

// 1 시험장의 개수
// 2 각 시험장의 응시자 수
// 3 총감독관이 감시할 수 있는 응시자 수, 부감독관이 감시할 수 있는 응시자 수
// 각각의 시험장에 총감독관은 오직 1명만 있어야 하고, 부감독관은 여러 명 있어도 된다.

const N = Number(input.shift()) 
const A = input.shift().split(' ').map(n => Number(n))
const [B, C] = input.shift().split(' ').map(n => Number(n))

let cnt = 0

for(let i = 0; i < N; i++) {
    if(A[i] <= B) {
        cnt++
    } else {
        let val = A[i] - B
        cnt += Math.ceil(val/C) + 1
    }
}

console.log(cnt)