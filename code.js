var Mark = require('./mark').Mark;

var Code = function(orderedValues) {
    this.values = orderedValues;
    this.isCodeEqual = function(guess) {
        return this.values.toString() === guess.values.toString();
    };
    this.mark = function(guess) {
        var blackCount = 0;
        var whiteCount = 0;
        for (var i = 0; i < guess.values.length; i++) {
            if (this.values[i] === guess.values[i]) {
                blackCount++;
            } else if (this.values.indexOf(guess.values[i]) !== -1) {
                whiteCount++;
            }
        }
        return new Mark(blackCount, whiteCount);
    };
};

module.exports.Code = Code;