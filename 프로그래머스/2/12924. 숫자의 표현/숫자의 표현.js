// function solution(n) {
//     let count = 0
//     let low = 1
//     let high = 2
//     let total = 1
    
//     while(low < high) {
//         if(total < n) {
//             total = total + high
//             high = high + 1
//         } else if (total > n) {
//             total = total - low
//             low = low + 1
//         } else {
//             count += 1
//             total = total + high
//             high = high + 1
//             total = total - low
//             low = low + 1
//         }
//     }
    
//     return count
// }

function solution(n) {
    let count = 0;
    let start = 1;
    let end = 1;
    let current_sum = 1;
    
    while (start <= n / 2) {
        if (current_sum < n) {
            end++;
            current_sum += end;
        } else if (current_sum > n) {
            current_sum -= start;
            start++;
        } else {
            count++;
            current_sum -= start;
            start++;
        }
    }
    
    return count + 1;
}