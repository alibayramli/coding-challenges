function productFib(prod) {
    for (let i = 0; i < prod; i++) {
        if (fib(i) * fib(i + 1) === prod) {
            return [fib(i), fib(i + 1), true];
        }
        if (prod < fib(i) * fib(i + 1)) {
            return [fib(i), fib(i + 1), false];
        }
    }
    function fib(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;
        let a = 0, b = 1;
        for (let i = 3; i <= n; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}