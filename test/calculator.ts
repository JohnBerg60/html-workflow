import {Calculator} from '../src/ts/calculator'
import {expect} from 'chai'

describe('calculator', () => {
    it('should return a initialized value of 0', () => {
        let calc = new Calculator();
        expect(calc.value).to.equal(0);
    });

    it('shoud add to value', () => {
        let calc = new Calculator();
        calc.add(5);
        expect(calc.value).to.equal(5);
    });
})