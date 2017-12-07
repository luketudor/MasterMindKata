var assert = require('assert');
var Code = require('../code').Code;
var Mark = require('../mark').Mark;

suite('Code', function() {
    suite('#CodePropertiesShould', function() {
        var code;
        test('return correct code', function() {
            code = new Code(['r', 'g', 'y', 'c']);
            assert.deepEqual(code.values, ['r', 'g', 'y', 'c']);
        });
        test('return a different correct code', function() {
            code = new Code(['w', 'g', 'w', 'c']);
            assert.deepEqual(code.values, ['w', 'g', 'w', 'c']);
        });
    });
    suite('#MarkShould', function() {
        var code;
        test('return 4 black pegs for correct guess', function() {
            code = new Code(['r', 'g', 'y', 'c']);
            assert.deepEqual(code.mark(new Code(['r', 'g', 'y', 'c'])), new Mark(4, 0));
        });
        test('return 3 black pegs for almost correct guess', function() {
            code = new Code(['r', 'g', 'y', 'c']);
            assert.deepEqual(code.mark(new Code(['w', 'g', 'y', 'c'])), new Mark(3, 0));
        });
        test('return 2 black pegs and 2 white pegs for guess', function() {
            code = new Code(['r', 'g', 'y', 'c']);
            assert.deepEqual(code.mark(new Code(['r', 'g', 'c', 'y'])), new Mark(2, 2));
        });
        test('return 1 black peg and 1 white peg for guess', function() {
            code = new Code(['r', 'g', 'y', 'c']);
            assert.deepEqual(code.mark(new Code(['w', 'r', 'w', 'c'])), new Mark(1, 1));
        });
        test('return 2 marks for a guess that is too short', function() {
            code = new Code(['r', 'g', 'y', 'c']);
            assert.deepEqual(code.mark(new Code(['r', 'g'])), new Mark(2, 0));
        });
        test('return 3 black marks only', function() {
            code = new Code(['b', 'r', 'r', 'r']);
            assert.deepEqual(code.mark(new Code(['r','r','r','r'])), new Mark(3, 0));
        });
    });
});