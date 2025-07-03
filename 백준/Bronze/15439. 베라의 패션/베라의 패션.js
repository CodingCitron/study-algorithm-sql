let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

const num = Number(input);

console.log(num * (num - 1));
