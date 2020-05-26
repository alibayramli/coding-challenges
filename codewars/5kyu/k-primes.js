function countKprimes(k, start, nd) {
    function primeCount(num) {
        let cnt = 0, n = num;
        for (let i = 2; i <= n / i; i++) {
            while (n % i == 0) {
                cnt++;
                n /= i;
            }
        }
        if (n > 1) {
            cnt++;
        }
        return cnt;
    }
    let result = [];
    for (let i = start; i <= nd; i++) {
        if (primeCount(i) === k) {
            result.push(i);
        }
    }
    return result;
}
function puzzle(s) {
    let onesPrimes = countKprimes(1, 2, s);
    let threesPrimes = countKprimes(3, 2, s);
    let sevensPrimes = countKprimes(7, 2, s);
    let cnt = 0;
    for (let x of onesPrimes) {
        for (let y of threesPrimes) {
            for (let z of sevensPrimes) {
                if (x + y + z === s) cnt++;
            }
        }
    }
    return cnt;
}