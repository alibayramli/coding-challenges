function domainName(url) {
    function extractDomain(keyword, lengthOfKeyWord) {
        let startIndex = url.indexOf(keyword);
        let restOfWord = url.slice(startIndex + lengthOfKeyWord,);
        let endIndex = restOfWord.indexOf('.');
        return restOfWord.slice(0, endIndex);
    }

    if (url.includes('www')) {
        return extractDomain('www', 4)
    }
    else if (url.includes('//')) {
        return extractDomain('//', 2)
    }
    else { return url.slice(0, url.indexOf('.')); }
}