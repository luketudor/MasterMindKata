var isGuessCorrect = function(code, guess) {
    return code.toString() === guess.toString();
};

module.exports.isGuessCorrect = isGuessCorrect;