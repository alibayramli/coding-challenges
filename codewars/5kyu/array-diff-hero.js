function array_diff_very_fast(a, b) {
    let cache = {}, result = [];
    for (let el of b) {
        cache[el] = (cache[el] || 0) + 1;
    }
    for (let i of a) {
        if (!cache[i]) {
            result.push(i);
        }
    }
    return result;
}