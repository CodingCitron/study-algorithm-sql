const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const n = parseInt(input.shift())
const t = [] // 걸리는 기간
const p = [] // 금액

input.map(row => {
    let arr = row.split(' ').map(num => parseInt(num))

    t.push(arr[0])
    p.push(arr[1])
})

// i는 기간
function solve(i) {
    // i 가 0보다 크면 퇴사를 했기 때문에 0 리턴
    // 0 부터 시작했으므로 n - 1
    if(i > n - 1) return 0

    let result = 0

    if(i + t[i] <= n) { // 기간이 n보다 작거나 같다면
        // i 기간에 받을 수 있는 금액
        result = solve(i + t[i]) + p[i]
    }

    return Math.max(result, solve(i + 1))
}

console.log(solve(0))