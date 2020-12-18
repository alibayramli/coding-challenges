function reverseNumber(n) {
    let isPositive = n > 0;
    n = Math.abs(n).toString().split('').reverse().join('');
    return isPositive ? Number(n) : -Number(n);
}