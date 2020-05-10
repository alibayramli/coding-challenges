function digital_root(n) {
    if (n / 10 < 1) return n;
    let sum = ('' + n).split('').reduce((acc, el) => +acc + +el);
    return digital_root(sum);
}