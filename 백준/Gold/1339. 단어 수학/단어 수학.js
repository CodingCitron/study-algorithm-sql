const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = input.shift();
const words = input.map((str) => str.trim());

const alphabetMap = new Map();

// 알파벳의 자릿값을 계산하여 맵에 저장
for (const word of words) {
  const length = word.length;
  for (let i = 0; i < length; i++) {
    const char = word[i];
    const value = Math.pow(10, length - 1 - i);
    alphabetMap.set(char, (alphabetMap.get(char) || 0) + value);
  }
}

// 자릿값을 기준으로 내림차순 정렬
const sortedValues = [...alphabetMap.values()].sort((a, b) => b - a);

let num = 9;
let totalSum = 0;

// 자릿값이 큰 알파벳부터 숫자를 할당하여 합계 계산
for (const value of sortedValues) {
  totalSum += value * num;
  num--;
}

console.log(totalSum);