function anagrams(word, words) {
    function isAnagram(word, arrEl) {
        let wordObj = {};
        let arrElObj = {};
        for (let el of word) {
            wordObj[el] = (wordObj[el] || 0) + 1;
        }
        for (let el of arrEl) {
            arrElObj[el] = (arrElObj[el] || 0) + 1;
        }
        for (let el of word) {
            if (arrElObj[el] !== wordObj[el]) return false;
        }
        return true;
    }
    return words.filter((arrEl) => isAnagram(word, arrEl))
}