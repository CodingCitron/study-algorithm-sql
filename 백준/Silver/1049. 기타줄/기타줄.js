const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

// n 끊어진 기타줄 수
// m 브랜드 개수
const [n, m] = input[0].split(' ').map(num => parseInt(num))

let minSet = 1000
let minSingle = 1000
let result = 0

for(let i = 1; i <= m; i++) {
    let [a, b] = input[i].split(' ').map(num => parseInt(num))

    if(minSet > a) minSet = a
    if(minSingle > b) minSingle = b 
}


/*
// 세트
for(let i = 0; i < Math.floor(n / 6); i++) {
    result += minSet < minSingle * 6 ? minSet : minSingle * 6
}

// 나머지
if (n % 6) {
    result += minSingle * (n % 6) > minSet ? minSet : minSingle * (n % 6) 
}
*/

if(minSet > minSingle * 6) {
    result += n * minSingle
} else {
    result += Math.floor(n/6) * minSet

    if((n%6) * minSingle > minSet) {
        result += minSet
    } else {
        result += (n%6) * minSingle
    }
}
console.log(result)
