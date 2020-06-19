function addLetters(...letters) {
    let sum = letters.reduce((acc, el) => acc + el.charCodeAt(0) - 96, 0) + 25;
    return String.fromCharCode(sum % 26 + 97);
}