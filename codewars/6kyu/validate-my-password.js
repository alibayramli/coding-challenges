function validPass(password) {
    if (password.length < 3 || password.length > 20) return 'INVALID';
    return /(\d.*[a-z])|([a-z].*\d)/i.test(password)
        && /^[a-z0-9]+$/i.test(password) ? 'VALID' : 'INVALID';
}