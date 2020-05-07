function strong(n) {
    let arr = ('' + n).split('');
    let sum = 0;
    for (let i of arr) {
        sum += fact(i);
    }
    function fact(num) {
        if (num <= 1) return 1;
        return num * fact(num - 1);
    }
    return sum === n ? "STRONG!!!!" : "Not Strong !!";
}