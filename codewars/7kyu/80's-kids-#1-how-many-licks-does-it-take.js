function totalLicks(env) {
    let valueOfChallenge = 0, extraLicks = 0, nameOfChallenge = '', checkifPropertyExists = false;
    for (let el in env) {
        extraLicks += env[el];
        if (env[el] > valueOfChallenge) {
            valueOfChallenge = env[el];
            nameOfChallenge = el;
            checkifPropertyExists = true;
        }
    }
    let firstSentence = `It took ${252 + extraLicks} licks to get to the tootsie roll center of a tootsie pop.`;
    let secondSentence = ` The toughest challenge was ${nameOfChallenge}.`;
    return checkifPropertyExists ? firstSentence + secondSentence : firstSentence;
}