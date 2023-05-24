const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(' ').map(num => parseInt(num))
const c = input[1].split(' ').map(num => parseInt(num))
const b = []

for(let i = 0; i < n; i++) b.push(false)

/*
n 내리는 위치
k 내구도가 0인 칸의 개수가 k개 일 때 종료
c 컨베이어 벨트 내구도 배열
*/

// 로봇이 올라가거나 이동하면 내구도가 1 감소


// 로봇 올리기
function upBot() {
    // 내구도가 없거나, 로봇이 안올라가 있을 때
    if(c[0] === 0 || b[0] === true) return

    b[0] = true
    c[0] -= 1
}

// 로봇과 함께 한 칸 회전한다
function move() {
    // 컨베이어 이동
    let temp = c[c.length - 1] // 마지막 위치
    for(let i = c.length - 1; i > 0; i--) {
        c[i] = c[i - 1]
    }
    c[0] = temp // 처음 위치 

    for(let i = n - 2; i >= 0; i--) {
        b[i + 1] = b[i] // 3 = 2, 2 = 1, 1 = 0

        if(i === 0) b[0] = false // i가 0이면 = false 
        if(b[n - 1]) b[n - 1] = false // 만약 내리는 지점이면 false
    }

    // 가장 먼저 벨트에 올라간 로봇부터 벨트가 회전하는 방향으로 한 칸 이동
    // 이동할 수 없다면 제자리
    // 로봇이 이동하려면 칸의 내구도가 1 이상 남아 있어야 함
    for(let i = n - 2; i >= 0; i--) {
        // b[i] = true, 
        // c[i + 1]이 내구도가 1 이상
        // b[i + 1]에 로봇이 있을 때
        if(b[i] && c[i + 1] > 0 && !b[i + 1]) {
            b[i + 1] = b[i]
            b[i] = false

            c[i + 1]--
        }
        
        if(b[n - 1]) b[n - 1] = false // 만약 내리는 지점이면 false
    }
}

// 종료
function end () {
    let cnt = 0
    
    c.forEach(num => {
        if(num <= 0) cnt++
    })

    return (cnt >= k)
} 

let result = 0

while (true) {
    if(end()) break
    result++

    move()
    upBot()
}

console.log(result)