function findNumber(array) {
    let n = array.length;
    if (n === 0) return 1;
    return (n + 1) * (n + 2) / 2 - array.reduce((a, b) => a + b);
}