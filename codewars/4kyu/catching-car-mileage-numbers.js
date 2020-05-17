function isInteresting(number, awesomePhrases) {
    if (number !== 98 && number !== 99) {
        if (number <= 99) return 0;
    }
    if (number === 98 || number === 99) return 1;

    if (followedByZeros(number) || ifAllDigitTheSame(number) ||
        ifSeqInc(number) || ifSeqDesc(number) || ifPalindrome(number) ||
        ifMatchesinArray(number, awesomePhrases)) {
        return 2;
    } else if (followedByZeros(number + 1) || ifAllDigitTheSame(number + 1) ||
        ifSeqInc(number + 1) || ifSeqDesc(number + 1) || ifPalindrome(number + 1) ||
        ifMatchesinArray(number + 1, awesomePhrases)) {
        return 1;
    } else if (followedByZeros(number + 2) || ifAllDigitTheSame(number + 1) ||
        ifSeqInc(number + 2) || ifSeqDesc(number + 2) || ifPalindrome(number + 2) ||
        ifMatchesinArray(number + 2, awesomePhrases)) {
        return 1;
    } else {
        return 0;
    }
    function followedByZeros(number) {
        number = number + '';
        let cnt = 0;
        for (let i = 0; i < number.length; i++) {
            if (number[i] === '0') cnt++;
        }
        return cnt === number.length - 1;
    }
    function ifAllDigitTheSame(number) {
        number = number + '';
        let first = number[0];
        for (let i = 1; i < number.length; i++) {
            if (number[i] !== first) return false;
        }
        return true;
    }
    function ifSeqInc(number) {
        number = (number + '').split('');
        let difference = number[1] - number[0];
        if (number[number.length - 1] === '0') {
            number[number.length - 1] = 10;
        }
        for (let i = 0; i < number.length - 1; i++) {
            if (number[i] >= number[i + 1] || number[i + 1] - number[i] !== difference) return false;
        }
        return true;
    }
    function ifSeqDesc(number) {
        number = number + '';
        let difference = number[0] - number[1];
        for (let i = 0; i < number.length - 1; i++) {
            if (number[i] <= number[i + 1] || number[i] - number[i + 1] !== difference) return false;
        }
        return true;
    }
    function ifPalindrome(number) {
        number = number + '';
        for (let i = 0; i < number.length; i++) {
            if (number[i] !== number[number.length - 1 - i]) return false;
        }
        return true;
    }
    function ifMatchesinArray(number, array) {
        return array.includes(number);
    }
}
function ifSeqInc(number) {
    number = (number + '').split('');
    let difference = number[1] - number[0];
    if (number[number.length - 1] === '0') {
        number[number.length - 1] = 10;
    }
    for (let i = 0; i < number.length - 1; i++) {
        if (number[i] >= number[i + 1] || number[i + 1] - number[i] !== difference) return false;
    }
    return true;
}