function solution(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            res.push([str[i], str[i + 1]].join(''))
        }
    }
    if (str.length % 2 === 1) {
        res[res.length - 1] += '_'
    }
    return res;
}