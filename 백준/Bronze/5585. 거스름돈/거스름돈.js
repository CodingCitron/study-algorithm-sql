const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let val = 1000 - Number(input[0]) 

// 500, 100, 50, 5, 1

let cnt = 0

function calc(money) {
    if(val === 0) return
    if(val >= money) {
        cnt += Math.floor(val/money)
        val = val%money
    }    
}

calc(500)
calc(100)
calc(50)
calc(10)
calc(5)
calc(1)

console.log(cnt)