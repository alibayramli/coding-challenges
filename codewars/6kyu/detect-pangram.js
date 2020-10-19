function isPangram(string) {
    let letters = [];
    let strArr = string.toLowerCase().split('');
    for (let i = 97; i < 123; i++) {
        letters.push(String.fromCharCode(i));
    }
    for (let letter of letters) {
        if (!strArr.includes(letter)) return false;
    }
    return true;
}