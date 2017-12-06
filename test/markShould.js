var assert = require('assert');

function Mark(numBlackPegs, numWhitePegs) {
    this.numBlack = numBlackPegs;
    this.numWhite = numWhitePegs;
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
    suite('#MarkPropertiesShould', function() {
        test('return 0 black pegs', function() {
            mark = new Mark(0, 4);
            assert.equal(mark.numBlack, 0);
        });
        test('return 1 black peg', function() {
            mark = new Mark(1, 2);
            assert.equal(mark.numBlack, 1);
        });
        test('return 4 white pegs', function() {
            mark = new Mark(0, 4);
            assert.equal(mark.numWhite, 4);
        });
        test('return 2 white pegs', function() {
            mark = new Mark(1, 2);
            assert.equal(mark.numWhite, 2);
        });
    });
});