var maxSequence = function (arr) {
    let maxSum = 0;
    let tmpSum = 0;
    for (let el of arr) {
        tmpSum += el;
        tmpSum > 0 ? maxSum = Math.max(maxSum, tmpSum) : tmpSum = 0;
    }
    return maxSum;
}