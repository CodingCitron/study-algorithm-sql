function solution(k, tangerine) {
    let count = 0;
    const sizeMap = new Map();

    // 귤 크기별 개수를 맵에 저장
    for (const size of tangerine) {
        sizeMap.set(size, (sizeMap.get(size) || 0) + 1);
    }

    // 귤 크기별 개수를 내림차순으로 정렬
    const sortedSizes = [...sizeMap.values()].sort((a, b) => b - a);

    // 귤을 선택하여 k개 이상이 될 때까지 반복
    for (const sizeCount of sortedSizes) {
        k -= sizeCount;
        count++;
        if (k <= 0) break;
    }

    return count;
}