var assert = require('assert');
var codeVerifier = require('../codeVerifier');

suite('CodeVerifier', function() {
    suite('#CodeVerifierShould', function() {
        test('return true for correct guess', function() {
            assert.equal(codeVerifier.isGuessCorrect(['r', 'g', 'y', 'c'], ['r', 'g', 'y', 'c']), true);
        });
        test('return false for incorrect test', function() {
            assert.deepEqual(codeVerifier.isGuessCorrect(['r', 'g', 'y', 'c'], ['w', 'g', 'w', 'c']), false);
        });
    });
});