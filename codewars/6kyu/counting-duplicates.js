function duplicateCount(text) {
    text = text.toLowerCase();
    let obj = {}, cnt = 0;
    for (let el of text) {
        obj[el] = (obj[el] || 0) + 1;
    }
    for (let i in obj) {
        if (obj[i] > 1) { cnt++; }
    }
    return cnt;
}