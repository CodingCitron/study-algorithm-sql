function solution(n) {
    let select = n + 1;
    
    while(true) {
       let f = getOnes(n)
       let s = getOnes(select)
        
       if(f === s) {
           break
       }
        
        select += 1
    }
    
    return select;
}

function getOnes(number) {
    let replace = number.toString(2).replaceAll('0', '')
    return replace.length
}