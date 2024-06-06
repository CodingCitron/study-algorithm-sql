function solution(s) {    
    let twoNumber = s 
    let sum = 0 /* 제거된 0의 합 */
    let cnt = 0 /* loop 횟수 */
        
    while(true) {
        let [updateTwo, zeroRemoveCount] = calc(twoNumber)
        
        cnt += 1
        sum += zeroRemoveCount
        twoNumber = updateTwo
        
        if(Number(updateTwo) === 1) {
            break
        }
    }
        
    return [cnt, sum];
}

function calc(two) {
    const zeroRemoved = two.replaceAll('0', '').length
    return [zeroRemoved.toString(2), two.length - zeroRemoved] /* 제거된 후 길이 2진 변환, 0 제거된 수 */
}