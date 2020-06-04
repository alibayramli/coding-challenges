function findOutlier(integers) {
    let cache = {};
    cache[0] = 0, cache[1] = 0;
    for (let el of integers) {
        if (el % 2 === 0) cache[0]++;
        else cache[1]++;
    }
    if (cache[0] > cache[1]) {
        return integers.find(el => el % 2 !== 0)
    }
    return integers.find(el => el % 2 === 0);
}