function persistence(num) {
    let cnt = 0, prod = 1;
    while (num > 9) {

        for (let i of (num + '').split('')) {
            prod *= +i;
        }
        cnt++;
        num = prod;
        prod = 1;
    }
    return cnt;
}
