function removeSmallest(numbers) {
    let smallestNum = Number.MAX_VALUE;
    let smallestNumIdx;
    numbers.forEach((num, idx) => {
        if (num < smallestNum) {
            smallestNum = num;
            smallestNumIdx = idx;
        }
    });
    return numbers.slice(0, smallestNumIdx).concat(numbers.slice(smallestNumIdx + 1,));
}