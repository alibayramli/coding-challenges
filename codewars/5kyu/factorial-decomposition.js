function primeFactorsOfNum(num) {
    let primes = [];
    while (num % 2 === 0) {
        primes.push(2);
        num = num / 2;
    }
    let sqrtNum = Math.sqrt(num);
    for (let i = 3; i <= sqrtNum; i++) {
        while (num % i === 0) {
            primes.push(i);
            num = num / i;
        }
    }
    if (num > 2) {
        primes.push(num);
    }
    return primes;
}
function decomp(n) {
    let allPrimes = [];
    let allPrimeFactors = {};
    for (let i = 2; i <= n; i++) {
        allPrimes.push(...primeFactorsOfNum(i));
    }
    allPrimes.forEach(prime => allPrimeFactors[prime] = (allPrimeFactors[prime] || 0) + 1);
    return Object.entries(allPrimeFactors).map(pair => {
        if (pair[1] !== 1) {
            return pair[0] + "^" + pair[1] + ' * ';
        } else {
            return pair[0] + ' * ';
        }
    }).join('').slice(0, -3);
}