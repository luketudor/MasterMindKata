var assert = require('assert');

function Mark(numBlackPegs, numWhitePegs) {
    this.numBlack = numBlackPegs;
    this.numWhite = numWhitePegs;
}

function Code(orderedValues) {
    this.values = orderedValues;
}

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

suite('Code', function() {
    var code;
    suite('#CodePropertiesShould', function() {
        test('return correct code', function() {
            code = new Code(['r', 'g', 'y', 'c']);
            assert.deepEqual(code.values, ['r', 'g', 'y', 'c']);
        });
        test('return a different correct code', function() {
            code = new Code(['w', 'g', 'w', 'c']);
            assert.deepEqual(code.values, ['w', 'g', 'w', 'c']);
        });
    });
});