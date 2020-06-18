var encryptThis = function (text) {
    let arr = text.split(' ');
    return arr.map(el => {
        return el.length === 1 ? el[0].charCodeAt(0) : (el.length == 2 ?
            el[0].charCodeAt(0) + el[1] : el[0].charCodeAt(0) + el[el.length - 1] +
            el.slice(2, el.length - 1) + el[1]);
    }).join(' ');
}