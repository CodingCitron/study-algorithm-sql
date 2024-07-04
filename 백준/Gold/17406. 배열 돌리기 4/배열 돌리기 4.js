const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, K] = input[0].split(' ').map(Number);

let array = [];

for (let i = 1; i <= N; i++) {
    array.push(input[i].split(' ').map(Number));
}

const operations = [];
for (let i = N + 1; i < input.length; i++) {
    const [r, c, s] = input[i].split(' ').map(Number);
    operations.push({ r, c, s });
}

// 배열 복사 함수
const copyArray = (array) => array.map(row => [...row]);

// 배열 회전 함수
const rotate = (array, operation) => {
    const { r, c, s } = operation;
    const newArray = copyArray(array);

    for (let layer = 1; layer <= s; layer++) {
        const top = r - layer - 1;
        const left = c - layer - 1;
        const bottom = r + layer - 1;
        const right = c + layer - 1;

        for (let i = left + 1; i <= right; i++) newArray[top][i] = array[top][i - 1];
        for (let i = top + 1; i <= bottom; i++) newArray[i][right] = array[i - 1][right];
        for (let i = right - 1; i >= left; i--) newArray[bottom][i] = array[bottom][i + 1];
        for (let i = bottom - 1; i >= top; i--) newArray[i][left] = array[i + 1][left];
    }

    return newArray;
};

// 배열의 각 행의 합 중 최솟값 계산 함수
const calculateMinRowSum = (array) => {
    return Math.min(...array.map(row => row.reduce((sum, value) => sum + value, 0)));
};

// 모든 연산 순열 생성 함수
const getPermutations = (arr, num) => {
    const results = [];
    if (num === 1) return arr.map(v => [v]);

    arr.forEach((v, idx, arr) => {
        const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
        const permutations = getPermutations(rest, num - 1);
        const attached = permutations.map(permutation => [v, ...permutation]);
        results.push(...attached);
    });

    return results;
};

// 모든 순열에 대해 연산을 수행하고 최솟값 찾기
const permutations = getPermutations(operations, operations.length);
let minResult = Infinity;

permutations.forEach(permutation => {
    let tempArray = copyArray(array);
    permutation.forEach(operation => {
        tempArray = rotate(tempArray, operation);
    });
    minResult = Math.min(minResult, calculateMinRowSum(tempArray));
});

console.log(minResult);
