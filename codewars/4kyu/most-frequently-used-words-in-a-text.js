function topThreeWords(text) {
    text = text.toLowerCase();
    let filtered = text.split(' ')
        .filter(el => /[a-zA-Z]+[']*/.test(el))
        .map(el => el.match(/[a-zA-Z]+[']*[a-zA-Z]*/)
            .join(''));
    let cache = {};
    for (let el of filtered) {
        cache[el] = (cache[el] || 0) + 1;
    }
    return Object.entries(cache).sort((a, b) => b[1] - a[1])
        .slice(0, 3).map(el => el[0]);
}