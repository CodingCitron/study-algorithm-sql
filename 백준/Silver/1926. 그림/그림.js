const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [n, m] = input.shift().split(' ').map(num => Number(num))

const map = []

input.forEach(arr => {
    map.push([...arr.trim().split(' ').map(num => Number(num))])
})
const visited = Array.from(Array(n), () => Array(m).fill(false))
// console.log(visited)

const d = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
]

const picture = []
function bfs (pos) {
    // console.log(pos)
    let cnt = 1

    while (pos.length) {
        const [x, y] = pos.shift()
        // map[x][y] = 2

        for(let i = 0; i < 4; i++) {
            let dx = x + d[i][0]
            let dy = y + d[i][1]

            if(dx >= 0 && dx < n && dy >= 0 && dy < m &&
                !visited[dx][dy] && map[dx][dy]) {
                visited[dx][dy] = true
                map[dx][dy] = 2
                // console.log(map)
                cnt++
                pos.push([dx, dy])
            }     
        }
    }

    return cnt
}

let painting = 0
let width = 0
let maxWidth = 0

for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        if(!visited[i][j] && map[i][j]) {
            visited[i][j] = true
            painting++
            // picture.push(bfs([[i, j]]))

            width = bfs([[i, j]])
            if (width > maxWidth) maxWidth = width
        }
    }
}

// console.log(map)
// console.log(picture)
// console.log(picture.length + '\n' + Math.max(...picture))

console.log(painting)
console.log(maxWidth)