function getCount(str) {
    var vowelsCount = 0
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i of str) {
        if (vowels.includes(i)) {
            vowelsCount++
        }
    }
    return vowelsCount
}