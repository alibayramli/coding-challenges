function primeFactors(n) {
    let primes = {};
    let cnt = 0;
    for (let i = 2; i <= n; i++) {
        if (n % i === 0 && isPrime(i)) {
            while (n / i === parseInt(n / i)) {
                primes[i] = ++cnt;
                n = n / i;
            }
        }
        cnt = 0;
    }
    return Object.entries(primes).map(el => el[1] === 1 ? `(${el[0]})` : `(${el[0]}**${el[1]})`).join('') + '';
    function isPrime(num) {
        if (num === 2) return true;
        if (num < 2 || num % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
}