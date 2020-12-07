function nthSmallest(arr, n) {
    const sortedArr = [...new Set(arr)].sort((a, b) => a - b)
    return sortedArr.length < n ? null : sortedArr[n - 1];
}