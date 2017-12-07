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
    }

    var blackCount = blackCounter(this.values);
    var whiteCount = whiteCounter();
    
    return new Mark(blackCount, whiteCount);
};

module.exports.Code = Code;