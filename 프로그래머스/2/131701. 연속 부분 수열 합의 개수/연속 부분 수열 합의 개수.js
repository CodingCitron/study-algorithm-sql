function solution(elements) {
    const n = elements.length;
    const sums = new Set();

    // 배열을 두 번 이어붙여서 원형 배열처럼 접근
    const extendedElements = elements.concat(elements);

	// 부분 수열의 합 계산
    for (let length = 1; length <= n; length++) {
        for (let start = 0; start < n; start++) {
            const subArray = extendedElements.slice(start, start + length);
            const sum = subArray.reduce((acc, val) => acc + val, 0);
            sums.add(sum);
        }
    }

    return sums.size;
}