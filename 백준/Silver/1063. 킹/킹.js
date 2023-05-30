const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let [ king, stone, n ] = input[0].split(' ').map(str => str.trim())
input.shift()
let orders = input.map(string => string.trim())
n = parseInt(n)

// 오른쪽, 왼쪽, 아래, 위, 오른쪽 위 대각선, 왼쪽 위 대각선, 오른쪽 아래 대각선, 왼쪽 아래 대각선
const o = { /* x, y */
    R: [1, 0],
    L: [-1, 0],
    B: [0, -1],
    T: [0, 1],
    RT: [1, 1],
    LT: [-1, 1],
    RB: [1, -1],
    LB: [-1, -1],
}

const c = {} /* A - H */

for(let i = 0; i < 8; i++) {
    c[String.fromCharCode(i + 65)] = i
}

function isOut (column, row) {
    return column < 0 || row < 0 || column > 7 || row > 7
}

function findPoint(str) {
    return [c[str.substring(0, 1)], parseInt(str.substring(1)) - 1]
}

let [ kx, ky ] = findPoint(king)
let [ sx, sy ] = findPoint(stone)

let chessArr = []

for(let i = 0; i < 8; i++) {
    chessArr.push([])
    for(let j = 0; j < 8; j++) {
        chessArr[i].push(0)
    }
}

chessArr[kx][ky] =  1
chessArr[sx][sy] =  2

for(let i = 0; i < n; i++) {
    let [x, y] = o[orders[i]]

    let calcX = kx + x
    let calcY = ky + y

    // 계산 값이 돌위치와 같다면 
    if(calcX === sx && calcY === sy){
        // 계산 후 돌이 밖으로 나간다면 이번 이동은 건너뛰기
        let calcSx = sx + x
        let calcSy = sy + y
        if(isOut(calcSx, calcSy)) {
            continue
        // 아니라면 돌을 먼저 이동 시키고 그 다음 이동
        } else {
            chessArr[sx][sy] = 0
            sx = calcSx
            sy = calcSy
            chessArr[sx][sy] = 2

            chessArr[kx][ky] = 0
            kx = calcX
            ky = calcY
            chessArr[kx][ky] = 1
        }
    } else {
        if(isOut(calcX, calcY)) continue

        chessArr[kx][ky] = 0
        kx = calcX
        ky = calcY
        chessArr[kx][ky] = 1
    }
}

let ki = [String.fromCharCode(kx + 65), ky + 1].join('')
let st = [String.fromCharCode(sx + 65), sy + 1].join('')

console.log(ki + '\n' + st)