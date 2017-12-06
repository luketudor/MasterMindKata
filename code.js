var Code = function(orderedValues) {
    this.values = orderedValues;
    this.isCodeEqual = function(guess) {
        return this.values.toString() === guess.values.toString();
    };
};

module.exports.Code = Code;