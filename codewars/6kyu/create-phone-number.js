function createPhoneNumber(numbers) {
    numbers = numbers.join('');
    let final = '';
    let firstThree = '(' + numbers.slice(0, 3) + ') ';
    let secondThree = numbers.slice(3, 6) + '-';
    let lastFour = numbers.slice(6) + '';
    return firstThree + secondThree + lastFour;
}