function validate(password) {
    return /^[a-zA-Z0-9_]{6,}$/.test(password) &&
        /[A-Z]+/.test(password) &&
        /[a-z]+/.test(password) &&
        /[0-9]+/.test(password);
}