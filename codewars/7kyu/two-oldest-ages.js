function twoOldestAges(ages) {
    const sorted = ages.sort((a, b) => a - b)
    return [sorted[sorted.length - 2], sorted[sorted.length - 1]];
}