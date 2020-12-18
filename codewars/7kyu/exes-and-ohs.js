function XO(str) {
    str = str.toLowerCase();
    let cnt = 0;
    for (let ch of str) {
        if (ch === 'x') cnt++;
        if (ch === 'o') cnt--;
    }
    return cnt === 0;
}