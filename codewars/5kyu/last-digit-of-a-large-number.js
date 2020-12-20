var lastDigit = function (str1, str2) {
    let digits = [1, 5, 6];
    let lastDigitStr1 = +str1[str1.length - 1];
    if (+str2 === 0) return 1;
    if (lastDigitStr1 === 0) return 0;
    if (digits.includes(lastDigitStr1)) return lastDigitStr1;
    let nums = {
        1: [1],
        2: [2, 4, 8, 6],
        3: [3, 9, 7, 1],
        4: [4, 6],
        5: [5],
        6: [6],
        7: [7, 9, 3, 1],
        8: [8, 4, 2, 6],
        9: [9, 1],
    }
    let lastPartOfStr2 = str2.slice(-nums[lastDigitStr1].length);
    let index;
    if (lastPartOfStr2 % nums[lastDigitStr1].length === 0) {
        index = nums[lastDigitStr1].length - 1;
    } else {
        index = lastPartOfStr2 % nums[lastDigitStr1].length - 1;
    }
    return nums[lastDigitStr1][index];
}