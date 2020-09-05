function find_average(array) {
    return array.reduce((el, acc) => el + acc, 0) / array.length;
}