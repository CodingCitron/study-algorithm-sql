function solution(n, words) {
    let usedWords = new Set();
    let previousWord = words[0];
    
    usedWords.add(previousWord);

    for (let i = 1; i < words.length; i++) {
        let currentWord = words[i];
        let currentPerson = (i % n) + 1;
        let currentTurn = Math.floor(i / n) + 1;

        if (usedWords.has(currentWord) || previousWord[previousWord.length - 1] !== currentWord[0]) {
            return [currentPerson, currentTurn];
        }

        usedWords.add(currentWord);
        previousWord = currentWord;
    }

    return [0, 0];
}