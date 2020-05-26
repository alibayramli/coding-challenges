function kprimesStep(k, step, start, nd) {
    let res = [];
    for (let i = start; i <= nd - step; i++) {
        if (primeCount(i) === k && primeCount(i + step) === k) {
            res.push([i, i + step]);
        }
    }
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
    return res;
}