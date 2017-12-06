var assert = require('assert');

function Code(orderedValues) {
    this.values = orderedValues;
}

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