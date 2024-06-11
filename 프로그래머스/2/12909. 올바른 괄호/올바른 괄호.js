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
    const stack = [];

    for (let char of s) {
        if (char === '(') {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}