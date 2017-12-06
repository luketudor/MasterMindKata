var assert = require('assert');

suite('ClassName', function() {
    suite('#MethodShould', function() {
        test('return -1 when not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
        test('return -1 again when not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});