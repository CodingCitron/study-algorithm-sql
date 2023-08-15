const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input.shift())

const rgbs = []

input.forEach(arr => {
    rgbs.push([...arr.trim()])
})

const visited = Array.from(Array(n), () => Array(n).fill(0))
const visited2 = Array.from(Array(n), () => Array(n).fill(0))

let d = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
]

// 적록색약은 R과 G를 구분하지 못한다.
let cnt = 1
let cnt2 = 1
let max1 = 0
let max2 = 0

for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        if(visited[i][j] === 0) { 
            max1 = bfs(visited, [[i, j, rgbs[i][j], cnt]])
            cnt++
        }

        if(visited2[i][j] === 0) {
            let colors = rgbs[i][j]

            if(rgbs[i][j] === 'R' || rgbs[i][j] === 'G') {
                colors = ['R', 'G']
            }

            max2 = bfs(visited2, [[i, j, colors, cnt2]])
            cnt2++
        }
    }
}

function bfs(visit, queue) {
    let max = 0 

    while(queue.length) {
        let [y, x, alpha, count] = queue.shift()
        
        for(let i = 0; i < 4; i++) {
            let r = y + d[i][0]
            let c = x + d[i][1]

            if(r < 0 || r >= n || c < 0 || c >= n) continue
            if(visit[r][c] !== 0) continue
            if(![...alpha].includes(rgbs[r][c])) continue

            visit[r][c] = count
            queue.push([r, c, alpha, count])
        }
        
        max = count
    }

    return max
}

console.log(max1 + ' ' + max2)
// console.log(max2)