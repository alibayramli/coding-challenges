function alphabetPosition(text) {
    let letters = {};
    for (let i = 97; i < 123; i++) {
        letters[String.fromCharCode(i)] = i - 96;
    }
    return text.split('')
        .filter(char => char.toLowerCase() in letters)
        .map(letter => letters[letter.toLowerCase()])
        .join(' ');
}