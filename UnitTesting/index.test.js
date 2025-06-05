const solve = require('./index'); // извикваме файла с функцията solve()
const { expect } = require('chai');
// const expect = require('chai').expect; /mmmmm/втори начин за извикване на Chai
// const assert = require('assert').strict; // държавен начин за тестване


describe('Sub-sum Calculator', () => { //контейнер за тестове


    it('Should calculate subSum when endIndex is larger than length', () => {
        //Arrange
        let expectedSum = 150;
        let numbers = [10, 20, 30, 40, 50, 60];
        let startIndex = 3;
        let endIndex = 300;

        //Act
        let actualSum = solve(numbers, startIndex, endIndex);
       
        //Assert/Expect
        expect(actualSum).to.equal(expectedSum);
        //assert.equal(actualSum, expectedSum);
    });

    it('Should return NaN when non-array is provided as a first argument', () => {
        expect(solve(10,1,2)).to.be.NaN;
        expect(solve(null,1,2)).to.be.NaN;
        expect(solve(undefined,1,2)).to.be.NaN;
        expect(solve({},1,2)).to.be.NaN;
        expect(solve(true,1,2)).to.be.NaN;
    });

});
