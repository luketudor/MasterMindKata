var assert = require('assert');
var codeVerifierFile = require('../codeVerifier');
var isGuessCorrect = codeVerifierFile.isGuessCorrect;

suite('CodeVerifier', function() {
    suite('#CodeVerifierShould', function() {
        test('return true for correct guess', function() {
            assert.equal(isGuessCorrect(['r', 'g', 'y', 'c'], ['r', 'g', 'y', 'c']), true);
        });
        test('return false for incorrect test', function() {
            assert.deepEqual(isGuessCorrect(['r', 'g', 'y', 'c'], ['w', 'g', 'w', 'c']), false);
        });
    });
});