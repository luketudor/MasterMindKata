var Mark = require('./mark').Mark;

var Code = function(orderedValues) {
    this.values = orderedValues;
};

Code.prototype.mark = function(guess) {
    var blackCount = 0;
    var whiteCount = 0;
    var codeNonBlacks = [];
    var guessNonBlacks = [];
    for (var i = 0; i < this.values.length; i++) {
        var colour = guess.values.shift();
        if (this.values[i] === colour) {
            blackCount++;
        } else {
            guessNonBlacks.push(colour);
            codeNonBlacks.push(this.values[i]);
        }
    }
    for (var i = 0; i < guessNonBlacks.length; i++) {
        if (codeNonBlacks.includes(guessNonBlacks[i])) {
            whiteCount++;
        }
    }
    return new Mark(blackCount, whiteCount);
};

module.exports.Code = Code;