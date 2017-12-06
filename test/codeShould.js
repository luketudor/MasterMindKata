var assert = require('assert');
var codeFile = require('../code');
var Code = codeFile.Code;

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