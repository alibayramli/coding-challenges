function sum_pairs(arr, target) {
    let obj = {};
    let pairs = [];
    let maxIndex = Number.MAX_VALUE;
    arr.forEach((el, index) => obj[el] = index);
    for (let i = 0; i < arr.length; i += 1) {
        let complement = target - arr[i];
        if (obj[complement] && i !== obj[complement]) {
            if (Math.max(obj[complement], i) < maxIndex) {
                maxIndex = Math.max(obj[complement], i);
                pairs = [arr[i], complement];
            }
        }
    }
    if (pairs.length) return pairs;
    return undefined;
}