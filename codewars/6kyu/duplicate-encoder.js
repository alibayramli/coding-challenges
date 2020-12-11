function duplicateEncode(word) {
    const obj = {};
    let encodedStr = ''
    for (let el of word.toLowerCase()) {
        obj[el] = (obj[el] || 0) + 1;
    }
    for (let el of word.toLowerCase()) {
        if (obj[el] === 1) {
            encodedStr += '(';
        } else {
            encodedStr += ')'
        }
    }
    return encodedStr;
}