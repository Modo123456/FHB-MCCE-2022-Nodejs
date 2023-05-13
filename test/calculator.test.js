

    const assert = require('assert');
    const calculator = require('../src/calculator');
    describe('calculator.calculate() Test', () => {
        it('should equal 2', () => {
        const result = calculator.calculate(1, 1, '+');
        assert.equal(result, 2);
        });
    });
    
    calculator.calculate = (num1, num2, operation) => {
        if(operation === '+')
        return num1 + num2;
        return num1 - num2;
        }

        it('3 times 2 should equal 6', () => {
const result = calculator.calculate(3, 2, '*');
assert.equal(result, 6);
})
calculator.calculate = (num1, num2, operation) => {
    if(operation === '+')
    return num1 + num2;
    else if(operation === '-')
    return num1 - num2;
    return num1 * num2;
    }
    