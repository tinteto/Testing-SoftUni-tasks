const lookupChar = require('./lookup.js');
const { assert } = require('chai');

describe('lookupChar function tests', () => {
it('should return undefined if parameter is number', () => {
    assert.equal(lookupChar(10, 4), undefined);
});
it('should return undefined if second parameter is string', () => {
    assert.equal(lookupChar(10, 'hi'), undefined);
});
it('should return incorrect index if parameter\'s index is less than 0', () => {
    assert.equal(lookupChar('hello', -2), "Incorrect index");
});
it('should return incorrect index if parameter\'s length is equal to index value', () => {
    assert.equal(lookupChar('hello', 5), "Incorrect index");
});
it('should return incorrect index if parameter\'s length is less than index value', () => {
    assert.equal(lookupChar('hello', 10), "Incorrect index");
});
it('should return index when correct parameters are provided', () => {
    assert.equal(lookupChar('hello', 4), 'o');
});
it('should return undefined with decimal second parameter ', () => {
    assert.equal(lookupChar('hello', 10.4), undefined);
});

});