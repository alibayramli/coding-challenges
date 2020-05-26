function sumOfDivided(lst) {
    function primeCount(num) {
        let res = [];
        let n = Math.abs(num);
        for (let i = 2; i <= n / i; i++) {
            while (n % i == 0) {
                res.push(i);
                n /= i;
            }
        }
        if (n > 1) {
            res.push(n);
        }
        return res;
    }
    let allFactors = [];
    for (let i of lst) {
        allFactors.push(primeCount(i));
    }
    let primeFactors = [...new Set([].concat.apply([], allFactors))];
    let obj = {};
    for (let i = 0; i < primeFactors.length; i++) {
        for (let j = 0; j < lst.length; j++) {
            if (lst[j] % primeFactors[i] === 0) {
                obj[primeFactors[i]] = (obj[primeFactors[i]] || 0) + lst[j];
            }
        }
    }
    return Object.entries(obj).map(el => [+el[0], el[1]]);
}