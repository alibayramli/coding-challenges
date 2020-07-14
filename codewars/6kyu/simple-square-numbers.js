function solve(n) {
    let i = 1;
    while (i < n) {
        if (Number.isInteger(Math.sqrt(i * i + n))) {
            return i * i;
        }
        i++;
    }
    return -1;
}