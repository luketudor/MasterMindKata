var Mark = require('./mark').Mark;

var Code = function(orderedValues) {
    this.values = orderedValues;
};

Code.prototype.mark = function(guess) {
    var blackCount = 0;
    var whiteCount = 0;
    for (var i = 0; i < this.values.length; i++) {
        if (this.values[i] === guess.values[i]) {
            blackCount++;
        } else if (this.values.includes(guess.values[i])) {
            whiteCount++;
        }
    }
    return new Mark(blackCount, whiteCount);
};

module.exports.Code = Code;