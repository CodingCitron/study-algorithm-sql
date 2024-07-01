function solution(n) {
    let result = '';
    const numbers = ['4', '1', '2'];
    
    while (n > 0) {
        const remainder = n % 3;
        n = Math.floor((n - 1) / 3);
        result = numbers[remainder] + result;
    }
    
    return result;
}