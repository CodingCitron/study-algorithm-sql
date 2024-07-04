function solution(s) {
    let answer = 0
    // 문자열이 홀수인 경우 0 
    if (s.length % 2 === 1) return 0;   
    
    const arr = [...s]
    const length = arr.length
    const stack = []
    let isRight = true;
    
    for(let i = 0; i < length; i++) {
        // 회전
        arr.push(arr.shift())    
        isRight = true;
        
        for(let char of arr) {
            if(char === '(' || char === '{' || char === '[') {
                stack.push(char)
            } else {
                let pop = stack.pop();
                if (char === ")" && pop === "(") continue;
                if (char === "}" && pop === "{") continue;
                if (char === "]" && pop === "[") continue;
                isRight = false;
                break;
            }
        }
        if (isRight) answer++;
    }
        
    return answer;
}

// 올바른 문자인지 체크
function check(array) {
    
}