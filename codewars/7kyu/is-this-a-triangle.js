function isTriangle(a, b, c) {
    return (a + b > c && a + c - b > 0 && b + c - a > 0) ? true : false;
}