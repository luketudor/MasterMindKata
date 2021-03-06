var assert = require('assert');
var Mark = require('../mark').Mark;

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
    suite('#ToStringShould', function() {
        test('return result string mark', function() {
            mark = new Mark(1, 3);
            assert.equal(mark.toString(), 'bwww');
        });
        test('return different result string mark', function() {
            mark = new Mark(2, 1);
            assert.equal(mark.toString(), 'bbw');
        });
    });
});
