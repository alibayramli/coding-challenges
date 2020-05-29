var splitInteger = function (num, parts) {
    let arr = [];
    let a = parseInt(num / parts);
    let b = num % parts;
    for (let i = 0; i < parts - b; i++) {
        arr.push(a);
    }
    for (let i = 0; i < b; i++) {
        arr.push(a + 1);
    }
    return arr;
}