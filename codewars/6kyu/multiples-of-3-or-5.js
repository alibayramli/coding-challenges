function solution(number) {
    let sum = 0;
    for (let i = 3; i < number; i++) {
        if ((i % 3 === 0 || i % 5 === 0)) {
            console.log(i);
            sum += i;
        }
    }
    return sum;
} // Could be written in O(1) as well maybe next I will do it that way.