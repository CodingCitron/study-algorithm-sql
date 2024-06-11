// 가정 반드시 () 이게 존재
// function solution(s){
//     while(true) {
//         const save = s 
//         s = s.replaceAll('()', '')
        
//         if(save === s) {
//             break
//         }
//     }
    
//     return s === '' ? true : false
// }

function solution(s) {
    // 스택을 이용해 괄호의 짝을 검사합니다.
    const stack = [];

    for (let char of s) {
        if (char === '(') {
            // 여는 괄호일 경우 스택에 넣습니다.
            stack.push(char);
        } else {
            // 닫는 괄호일 경우 스택에서 하나를 꺼냅니다.
            if (stack.length === 0) {
                // 스택이 비어 있으면 짝이 맞지 않으므로 false를 반환합니다.
                return false;
            }
            stack.pop();
        }
    }

    // 모든 연산이 끝난 후 스택이 비어있다면 true, 비어있지 않다면 false를 반환합니다.
    return stack.length === 0;
}