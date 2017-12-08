var Mark = function(numBlackPegs, numWhitePegs) {
    this.numBlack = numBlackPegs;
    this.numWhite = numWhitePegs;
};

Mark.prototype.toString = function() {
    var list = '';
    for (var i = 0; i < this.numBlack; i++) {
        list += 'b';
    }
    for (var i = 0; i < this.numWhite; i++) {
        list += 'w';
    }
    return list;
};

module.exports.Mark = Mark;