function solution(brown, yellow) {
    var answer = [];
    
    let divisor = []
    let sum = brown + yellow
    
    // 약수를 구한다.
    for (let i = 1; i <= sum; i++) {
        if(sum/i % 1 !== 0) continue
        divisor.push([
            i, sum/i
        ])
    }
    
    // 가로 길이는 세로 길이보다 같거나 길고, 세로 길이는 2 이상
    divisor = divisor.filter(d => (d[0] > d[1] || d[0] === d[1]) && d[1] > 2)
    
    // 카펫안에 옐로우 개수가 맞는지 확인
    if(divisor.length > 1) { 
        divisor = divisor.filter(d => ((d[0] - 2) * (d[1] - 2)) === yellow)
    }
    
    return divisor[0];
}