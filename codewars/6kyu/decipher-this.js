function decipherThis(str) {
    let result = [];
    str.split(' ').map(el => {
        let arr = [];
        arr[0] = String.fromCharCode(parseInt(el));
        let tmp = el.slice((parseInt(el) + '').length);
        if (tmp.length > 1) {
            arr[1] = el[el.length - 1];
        }
        for (let i = 1; i < tmp.length - 1; i++) {
            arr[i + 1] = tmp[i];
        }
        arr[arr.length] = tmp[0];
        result.push(arr.join(''));
    });
    return result.join(' ');
}; 