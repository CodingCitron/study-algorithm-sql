const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const [N, M] = input.shift().split(" ").map(Number)
let [r, c, d] = input.shift().split(" ").map(Number)
const room = input.map(i => i.split(" ").map(Number))

// 북, 동, 남, 서
let dx = [0, 1, 0, -1]
let dy = [-1, 0, 1, 0]
let cnt = 0

while (true) {
    
    // 1. 현재 칸 청소가 되지 않은 경우 청소
    if(room[r][c] === 0) {
        room[r][c] = 2 // 청소가 된 부분은 2로 표시
        cnt++
    }

    // 2. 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 없는 경우,
    if(room[r + 1][c] !== 0 && 
        room[r - 1][c] !== 0 && 
        room[r][c - 1] !== 0 && 
        room[r][c + 1] !== 0) {

            // 주의 해야할 점 d는 0 ~ 3 범위내로 나와야 한다. 여기서 헤맴
            let b = d

            for(let i = 0; i < 2; i++) {
                b++

                if(b > 3) b = 0
            }

            // 바라보는 방향을 유지한 채 한 칸 후진할 수 있다면 한 칸 후진하고 1번
            if(room[r + dy[b]][c + dx[b]] === 2 || 
                room[r + dy[b]][c + dx[b]] === 0) {
                r = r + dy[b]
                c = c + dx[b]
                
                continue
            }

            // 바라보는 방향의 뒤쪽 칸이 벽이면 종료
            if(room[r + dy[b]][c + dx[b]] === 1 || room[r + dy[b]][c + dx[b]] === undefined) {
                break
            }
    }
    
    // 3. 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 있는 경우
    if(room[r + 1][c] === 0 || 
        room[r - 1][c] === 0 || 
        room[r][c - 1] === 0 || 
        room[r][c + 1] === 0) {

            // 반 시계 방향으로 회전
            d--
            if(d < 0) d = 3

            // 바라보는 방향을 기준으로 앞쪽 칸이 청소되지 않은 빈 칸인 경우 한 칸 전진후 1번
            if(room[r + dy[d]][c + dx[d]] === 0) {
                r = r + dy[d]
                c = c + dx[d]
            
                continue
            }
    }
}

//console.log(room)
console.log(cnt)
