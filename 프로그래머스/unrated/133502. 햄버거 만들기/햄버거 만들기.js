// function solution(ingredient) {
    
//     let str = ingredient.join('')
//     let cnt = 0
    
//     while(true) {   
//         let pr = str.replaceAll('1231', '')

//         if(str !== pr) {
//             cnt += (str.length - pr.length) / 4
//             str = pr
//         }
        
//         else break
//     }
        
//     return cnt
// }

function solution(ingredient) {
    let cnt = 0
    let stack = []
    
    ingredient.forEach((arr, index) => {
        stack.push(arr)
        
        if(stack.length >= 4) {
            if(stack.slice(-4).join('') === '1231') {
                stack.pop()
                stack.pop()
                stack.pop()
                stack.pop()
                
                cnt++
            }
        } 
    })
    
    return cnt
}





