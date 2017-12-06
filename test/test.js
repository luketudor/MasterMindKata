var assert = require('assert');

function Mark(numWhitePegs, numBlackPegs) {
    this.numWhite = numWhitePegs;
    this.numBlack = numBlackPegs;
}

/*suite('ClassName', function() {
    suite('#MethodShould', function() {
        test('return -1 when not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
        test('return -1 again when not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});*/
suite('Mark', function() {
    var mark;
    suite('#MarkShouldStore', function() {
        mark = new Mark(4, 0);
        test('return 4 white pegs', function() {
            assert.equal(4, mark.numWhite);
        });
        test('return 0 black pegs', function() {
            assert.equal(0, mark.numBlack);
        });
    });
});