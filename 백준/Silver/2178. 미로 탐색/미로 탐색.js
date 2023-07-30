const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input.shift().split(' ')

// const array = Array.from(Array(Number(n)), () => [])
const map = []

input.forEach((item, index) => 
    map[index] = [...item.trim()].map(n => +n)
)

const stack = [[0, 0, 1]] // 현재 x, y, dis
const d = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
]

while(stack.length) {
    const [x, y, dis] = stack.shift()

    for(let i = 0; i < 4; i++) {
        let dx = x + d[i][0]
        let dy = y + d[i][1]

        if(map[dx] && map[dx][dy] === 1) {
            map[dx][dy] = dis + 1
            stack.push([dx, dy, dis + 1])
        }
    }
}

console.log(map[n - 1][m - 1])