var assert = require('assert');
var Code = require('../code').Code;

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
    suite('#IsCodeEqualShould', function() {
        var code;
        test('return true for correct guess', function() {
            code = new Code(['r', 'g', 'y', 'c']);
            assert.equal(code.isCodeEqual(new Code(['r', 'g', 'y', 'c'])), true);
        });
        test('return false for incorrect test', function() {
            code = new Code(['r', 'g', 'y', 'c']);
            assert.equal(code.isCodeEqual(new Code(['w', 'g', 'w', 'c'])), false);
        });
    });
});