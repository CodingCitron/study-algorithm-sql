const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let arr = []

for(let i = 0; i < input.length; i++) {
    let num = Number(input[i])
    if(num === 0) break

    let num1 = num * 3
    let num2 = 0
    let num3 = 0
    let num4 = 0
    let even = false

    if(num1%2 === 0) { // 짝 
        num2 = num1/2    
        even = true
    } else { // 홀
        num2 = (num1 + 1)/2
    }

    num3 = 3 * num2
    num4 = num3/9
    
    let str = `${i + 1}. ${even? "even" : "odd"} ${Math.floor(num4)}`

    arr.push(str)
}

console.log(arr.join('\n'))