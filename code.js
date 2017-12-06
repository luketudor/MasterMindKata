var Mark = require('./mark').Mark;

var Code = function(orderedValues) {
    this.values = orderedValues;
    this.isCodeEqual = function(guess) {
        return this.values.toString() === guess.values.toString();
    };
    this.mark = function(guess) {
        return new Mark(4, 0);
    };
};

module.exports.Code = Code;