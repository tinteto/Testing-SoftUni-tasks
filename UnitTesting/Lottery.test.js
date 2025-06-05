let lottery = require('./Lottery.js');
let { assert } = require('chai');

describe('lottery tests', () => {

    describe('buyLotteryTicket tests', () => {
        it('throws error', () => {
            assert.throw(() => lottery.buyLotteryTicket(6,6,false), "Unable to buy lottery ticket!");
        });
        it('throws error', () => {
            assert.throw(() => lottery.buyLotteryTicket(0,0,'string'), "Invalid input!");
        });
        it('throws error', () => {
            assert.throw(() => lottery.buyLotteryTicket('string','string','string'), "Invalid input!");
        });
        it('returns result', () => {
            assert.equal(lottery.buyLotteryTicket(5,5,true), "You bought 5 tickets for 25$.");
        });
    });

    describe('checkTicket tests', () => {
        let ticketNumberArray = [1,2,3,4,5,6,7];
        let luckyNumberArray = [8,9,10,11,12,13,14];

        let ticketNumberArr = [1,2,3,4,5,6];
        let luckyNumberArr = [1,2,3,4,5,8];

        let ticketNumberJack = [1,2,3,4,5,6];
        let luckyNumberJack = [1,2,3,4,5,6];
        it('throws error', () => {
            assert.throws(() => lottery.checkTicket('string', 'string'), "Invalid input!");
        });
        it('throws error', () => {
            assert.throws(() => lottery.checkTicket(ticketNumberArray, luckyNumberArray), "Invalid input!");
        });
        it('returns result', () => {
            assert.equal(lottery.checkTicket(ticketNumberArr,luckyNumberArr), "Congratulations you win, check your reward!");
        });
        it('returns result', () => {
            assert.equal(lottery.checkTicket(ticketNumberJack,luckyNumberJack), "You win the JACKPOT!!!");
        });

    });
    describe('secondChance tests', () => {
        let ticketID = 6;
        let secondChanceWinningIDs = [1,2,3,4,5,6];

        let ticket = 8;
        let secondChanceArr = [1,2,3,4,5,7];
        it('throws error', () => {
            assert.throw(() => lottery.secondChance('string', []), "Invalid input!");
        });
        it('throws error', () => {
            assert.throw(() => lottery.secondChance('string', 6), "Invalid input!");
        });
        it('returns result', () => {
            assert.equal(lottery.secondChance(ticketID, secondChanceWinningIDs), "You win our second chance prize!");
        });
        it('returns result', () => {
            assert.equal(lottery.secondChance(ticket,secondChanceArr), "Sorry, your ticket didn't win!");
        });
    });
});