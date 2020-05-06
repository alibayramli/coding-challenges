function step(g, m, n) {
    for (let i = m; i <= n; i++) {
        if (isPrime(i) && isPrime(i + g)) {
            return [i, i + g];
        }
    }
    return null;
    function isPrime(num) {
        if (num === 2) return true;
        if (num < 2 || num % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
}