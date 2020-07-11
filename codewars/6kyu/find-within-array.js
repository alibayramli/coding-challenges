var findInArray = function (array, iterator) {
    return array.findIndex((el, index) => iterator(el, index));
};