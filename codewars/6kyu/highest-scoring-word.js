function high(x) {
    let alpha = {};
    for (let i = 0; i < 26; i++) {
        alpha[String.fromCharCode(97 + i)] = i + 1;
    }
    let wordsArr = x.split(' ');
    let wordsScore = wordsArr.map(el => {
        return el.split('').reduce((acc, el) => acc + alpha[el], 0)
    });
    let maxScore = wordsScore[0], maxScoreIndex = 0;
    for (let i = 0; i < wordsScore.length; i++) {
        if (wordsScore[i] > maxScore) {
            maxScore = wordsScore[i];
            maxScoreIndex = i;
        }
    }
    return wordsArr[maxScoreIndex];
}