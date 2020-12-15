function validISBN10(isbn) {
    if (isbn.length !== 10) return false;
    if (/X/.test(isbn.slice(0, -1))) return false;
    return isbn.split('').reduce((acc, el, index) => {
        return acc + (el === 'X' ? 10 : el) * (index + 1)
    }, 0)
        % 11 === 0;
}