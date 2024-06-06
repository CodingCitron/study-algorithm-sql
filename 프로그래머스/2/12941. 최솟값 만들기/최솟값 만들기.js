function solution(A,B){
    var answer = 0;
    
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)

    A.forEach((n, i) => {
        answer += A[i] * B[i]
    })
    
    return answer;
}