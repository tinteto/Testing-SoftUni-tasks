let mathEnforcer = require('./enforcer.js');
let { assert } = require('chai');

describe('addFive function tests', () => {
    it('should return undefined if parameter is string', () => {
        assert.equal(mathEnforcer.addFive('hello'), undefined);
    });
    it('should return result with correct parameters', () => {
        assert.equal(mathEnforcer.addFive(10), 15);
    })
    it('should return negative result with negative parameter bigger than 5', () => {
        assert.equal(mathEnforcer.addFive(-10), -5);
    });
    it('should return positive result with negative parameter smaller than 5', () => {
        assert.equal(mathEnforcer.addFive(-3), 2);
    });
    it('should work with floating point numbers', () => {
        assert.equal(mathEnforcer.addFive(3.5), 8.5);
    });
});

describe('subtractTen function tests', () => {
    it('should return undefined if parameter is string', () => {
        assert.equal(mathEnforcer.subtractTen('hello'), undefined);
    });
    it('should return result with correct parameters', () => {
        assert.equal(mathEnforcer.subtractTen(15), 5);
    });
    it('should return negative result with negative parameter', () => {
        assert.equal(mathEnforcer.subtractTen(-15), -25);
    });
    it('should work with floating point numbers', () => {
        assert.equal(mathEnforcer.subtractTen(20.5), 10.5);
    })
   

});

describe('sum function tests', () => {
    it('should return undefined if first parameter is string', () => {
        assert.equal(mathEnforcer.sum('hello', 7), undefined);
    });
    it('should return undefined if second parameter is string', () => {
        assert.equal(mathEnforcer.sum(7, 'hello'), undefined);
    });
    it('should return result with correct parameters', () => {
        assert.equal(mathEnforcer.sum(15, 10), 25);
    });
    it('should return negative when first parameter is negative and bigger than second', () => {
        assert.equal(mathEnforcer.sum(-10, 5), -5);
    });
    it('should return positive when first parameter is negative and smaller than second', () => {
        assert.equal(mathEnforcer.sum(-3, 5), 2);
    });
    it('should work with floating point numbers', () => {
        assert.equal(mathEnforcer.sum(3.5, 3.5), 7);
    });

});

