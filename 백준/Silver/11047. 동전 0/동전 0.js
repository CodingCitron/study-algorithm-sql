const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, K]= input.shift().split(' ').map(n => parseInt(n))

let cnt = 0

// while(K !== 0) {
//     let money = 0

//     for(let i = f; i < b; i++) {
//         if(parseInt(arr[i]) > K) {
//             money = parseInt(arr[i - 1])

//             // 시간 초과 떠서 추가
//             b = i 
//             break
//         }
//     }

//     cnt += (K - K%money) / money
//     K = K%money
// }
let q

for(let i = N - 1; i >= 0; i--) {
    let value = parseInt(input[i])
    q = Math.floor(K/value)

    if(q === 0) continue

    cnt += q
    K %= value

    if(K === 0) break
}

console.log(cnt)