function findUniq(arr) {
    let cache = {};
    for (let el of arr) {
        cache[el] = (cache[el] || 0) + 1;
    }
    for (let el in cache) {
        if (cache[el] === 1) return +el;
    }
}