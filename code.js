var Mark = require('./mark').Mark;

var Code = function(orderedValues) {
    this.values = orderedValues;
    this.isCodeEqual = function(guess) {
        return this.values.toString() === guess.values.toString();
    };
    this.mark = function(guess) {
        var blackCount = 0;
        for (var i = 0; i < guess.values.length; i++) {
            if (this.values[i] === guess.values[i]) {
                blackCount++;
            }
        }
        return new Mark(blackCount, 0);
    };
};

module.exports.Code = Code;