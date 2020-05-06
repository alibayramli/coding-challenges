function squareSum(numbers) {
    return numbers.map(num => num * num).reduce((acc, el) => acc + el, 0);
}