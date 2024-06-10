function solution(s) {
    const array = s.split(' ')
    array.sort((a, b) => a - b)
    
    const min = array[0]
    const max = array[array.length - 1]
    
    return `${min} ${max}`;
}