const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [H, W, N, M] = input.shift().split(' ').map(n => Number(n))

// 메모리 초과 방식
// const array = Array.from(Array(H), () => Array(W).fill(0))

// N 세로 M 가로
// console.log(H, W, N, M)

// let cnt = 0

// for(let i = 0; i < H; i++) {
//     for(let j = 0; j < W; j++) {
//         if(array[i][j] !== 0) continue
//         cnt++
        
//         if(array[i][j + M] === 0) {
//             array[i][j + M] = 1
//         }

//         if(array[i + N]) {
//             array[i + N][j] = 1

//             if(array[i + N][j + M] === 0) {
//                 array[i + N][j + M] = 1
//             }
//         }
//     }
// }

// console.log(cnt)

let a = Math.ceil(W/(M+1))
let b = Math.ceil(H/(N+1))

console.log(a * b)