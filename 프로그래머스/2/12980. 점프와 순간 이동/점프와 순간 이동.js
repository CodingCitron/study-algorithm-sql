function solution(N) {
    let usage = 0;

    while (N > 0) {
        // 0 으로 떨어질때 나누고 (짝수)
        if (N % 2 === 0) {
            N /= 2; 
        // 나머지가 있을 때 점프
        } else {
            N -= 1; 
            usage++;
        }
    }

    return usage;
}