function solution(n) {
    //  기본 피보나치 값 설정
    if (n === 0) return 0;
    if (n === 1) return 1;

    let fib = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        fib[i] = (fib[i - 1] + fib[i - 2]) % 1234567;
    }
    
    return fib[n];
}

// function solution(n) {    
//     return fibonacci(n) % 1234567;
// }

function fibonacci(n) {
    // 기본 조건
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    
    // 재귀 호출
    return fibonacci(n - 1) + fibonacci(n - 2);
}
