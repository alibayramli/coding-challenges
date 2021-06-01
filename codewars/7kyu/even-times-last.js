function evenLast(numbers) {
    if (numbers.length === 0) return 0;
    return numbers[numbers.length - 1] * numbers
        .filter((num, idx) => idx % 2 === 0)
        .reduce((acc, num) => acc + num, 0)
}