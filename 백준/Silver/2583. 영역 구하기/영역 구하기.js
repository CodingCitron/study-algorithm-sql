const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [m, n, k] = input.shift().split(' ').map(n => Number(n))

const nums = Array.from(Array(m), () => Array(n).fill(0))
const visited = Array.from(Array(m), () => Array(n).fill(0))

for(let i = 0; i < k; i++) {
    makeBlock(input[i].split(' ').map(n => Number(n)))
}

function makeBlock(coords) {
    let startY = coords[1]
    let endY = coords[3]
    let startX = coords[0]
    let endX = coords[2]

    for(let i = startY; i < endY; i++) {
        for(let j = startX; j < endX; j++) {
            nums[i][j] = -1
            visited[i][j] = -1
        }
    }
}

const d = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
]

let cnt = 1
let max = 0
let ans = []

for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++) {
        if(visited[i][j] !== 0) continue
        let [m, c] = bfs([[
            i, j, cnt
        ]])

        ans.push(c)

        if(max < m) {
            max = m
        }

        cnt++
    }
}

function bfs(queue) {
    let max = 0
    let cnt = 1

    while(queue.length) {
        let [raw, col, num] = queue.shift()
        visited[raw][col] = num

        for(let i = 0; i < 4; i++) {
            let r = raw + d[i][0]
            let c = col + d[i][1]

            if(r < 0 || r >= m || c < 0 || c >= n) continue
            if(visited[r][c] !== 0) continue

            cnt++
            visited[r][c] = num
            queue.push([r, c, num])
        }

        max = num
    }

    return [max, cnt]
}

console.log(max + '\n' + ans.sort((a, b) => a - b).join(' '))