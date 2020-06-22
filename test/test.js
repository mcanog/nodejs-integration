const expect = require('chai').expect;
describe('Simple Math Test', () => {
 it('should return 2', () => {
        expect(1 + 1).to.equal(2);
    });
 it('should return 9', () => {
        expect(3 * 3).to.equal(9);
    });
});

// import math file
const math = require('../public/js/math');
describe('math.js tests', () => {
    describe('math.add() Test', () => {
        it('should equal 2', () => {
            const result = math.add(1, 1);
            expect(result).to.equal(2);
        });
        it('should equal 4', () => {
            const result = math.add(2, 2);
            expect(result).to.equal(4);
        });
    });
    
    describe('math.multiply() Test', () => {
        it('should equal 3', () => {
            const result = math.multiply(3, 1);
            expect(result).to.equal(3);
        });
        it('should equal 10', () => {
            const result = math.multiply(5, 2);
            expect(result).to.equal(10);
        });
    });
});