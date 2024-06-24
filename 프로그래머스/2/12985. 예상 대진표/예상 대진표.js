function solution(n, a, b) {
    let round = 0;
    
    // a와 b가 같아질 때까지 반복
    while (a !== b) {
        // 다음 라운드 번호 계산
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        round++;
    }
    
    return round;
}