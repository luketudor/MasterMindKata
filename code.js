var Mark = require('./mark').Mark;

var Code = function(orderedValues) {
    this.values = orderedValues;
};

Code.prototype.mark = function(guess) {
    var codeNonBlacks = [];
    var guessNonBlacks = [];
    var blackCounter = function(codeValues) {
        for (var i = 0; i < codeValues.length; i++) {
            var colour = guess.values.shift();
            if (codeValues[i] !== colour) {
                guessNonBlacks.push(colour);
                codeNonBlacks.push(codeValues[i]);
            }
        }
        return codeValues.length - codeNonBlacks.length;
    };

    var whiteCounter = function() {
        for (var i = 0; i < guessNonBlacks.length; i++) {
            var matchIndex = codeNonBlacks.indexOf(guessNonBlacks[i]);
            if (matchIndex !== -1) {
                codeNonBlacks.splice(matchIndex, 1);
            }
        }
        return guessNonBlacks.length - codeNonBlacks.length;
    };

    return new Mark(blackCounter(this.values), whiteCounter());
};

module.exports.Code = Code;