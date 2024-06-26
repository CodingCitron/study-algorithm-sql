function gcd(a, b) {
    // 유클리드 호제법을 이용하여 최대공약수를 구하는 함수
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    // 두 수의 최소공배수를 구하는 함수
    return (a * b) / gcd(a, b);
}

function solution(arr) {
    // 배열의 모든 수의 최소공배수를 구하는 함수
    return arr.reduce((acc, cur) => lcm(acc, cur));
}