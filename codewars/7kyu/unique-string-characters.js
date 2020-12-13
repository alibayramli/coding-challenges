function solve(a, b) {
    let uniqueChars = '';
    for (el of a) {
        if (!b.split('').includes(el)) {
            uniqueChars += el;
        }
    }
    for (el of b) {
        if (!a.split('').includes(el)) {
            uniqueChars += el;
        }
    }
    return uniqueChars;
};