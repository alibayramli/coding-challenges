function generateHashtag(str) {
    str = str.trim();
    if (!str) return false;
    const start = "#";
    const body = str.split(/\s+/);
    const result = body.map(word => word[0].toUpperCase() + word.slice(1,))
        .join('');
    return (result.length >= 140 || !result) ? false : start + result;
}