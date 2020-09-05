function getAverage(array) {
    return Math.floor(array.reduce((el, acc) => el + acc, 0) / array.length);
}