function findOdd(arr) {
    let obj = {};
    for (let el of arr) {
        obj[el] = (obj[el] || 0) + 1;
    }
    for (let el in obj) {
        if (obj[el] % 2 === 1) {
            return +el;
        }
    }
}