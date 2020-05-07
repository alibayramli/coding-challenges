function balancedNum(number) {
    let str = ('' + number);
    if (str.length <= 2) return 'Balanced';
    let midLeft = 0, midRight = 0;
    if (str.length % 2 === 1) {
        let middle = (str.length + 1) / 2 - 1;
        for (let i = 0; i < middle; i++) {
            midLeft += +str[i];
        }
        for (let i = str.length - 1; i > middle; i--) {
            midRight += +str[i];
        }
        return midLeft === midRight ? 'Balanced' : 'Not Balanced';
    }
    if (str.length % 2 === 0) {
        let mid1 = str.length / 2 - 1;
        let mid2 = str.length / 2;
        for (let i = 0; i < mid1; i++) {
            midLeft += +str[i];
        }
        for (let i = str.length - 1; i > mid2; i--) {
            midRight += +str[i];
        }
        return midLeft === midRight ? 'Balanced' : 'Not Balanced';
    }
}