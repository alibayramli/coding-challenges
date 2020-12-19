function sumEvenNumbers(input) {
    return input.filter(el => !(el % 2)).reduce((acc, val) => acc + val, 0);
}