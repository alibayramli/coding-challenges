function findUniq(arr) {
    const uniqueStrs = arr.map(el => {
        return [...new Set(el.toLowerCase().split(''))].sort().join('');
    })
    for (let i = 1; i < uniqueStrs.length - 1; i++) {
        if (uniqueStrs[i] !== uniqueStrs[i + 1]) {
            return uniqueStrs[i] === uniqueStrs[i - 1] ? arr[i + 1] : arr[i];
        }
    }
    return arr[0];
}