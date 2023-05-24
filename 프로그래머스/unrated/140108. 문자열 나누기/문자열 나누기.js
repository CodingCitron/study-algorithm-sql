function solution(s) {
    var answer = 0;

    let x = ''
    let cnt = 0
    let cnt2 = 0
    
    for(let i = 0; i < s.length + 1; i++) {
        if(x === '') x = s[i]
        
        if(x === s[i]) cnt++
        else cnt2++
        
        if(cnt === cnt2) {
            cnt = 0
            cnt2 = 0
            x = ''
            answer += 1
        }
    }
    
    if(x !== '' && x !== undefined) answer += 1
    
    return answer;
}