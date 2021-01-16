import "babel-polyfill";
import {polarityCheck} from "../src/client/js/formHandler"

describe('Testing polarity', () => {

    test('Testing polarityCheck() function', () => {

        expect(polarityCheck('NONE')).toBe('NO SENTIMENT')
    })
    
    test('Testing polarityCheck() function', () => {
        
        expect(polarityCheck('P+')).toBe('HIGH POSITIVE')
    })

    test('Testing polarityCheck() function', () => {
        expect(polarityCheck('P')).toBe('POSITIVE')
    })

    test('Testing polarityCheck() function', () => {
        expect(polarityCheck('NEW')).toBe('NEUTRAL')
    })

    test('Testing polarityCheck() function', () => {
        expect(polarityCheck('N')).toBe('NEGATIVE')
    })

    test('Testing polarityCheck() function', () => {
        expect(polarityCheck('N+')).toBe('HIGH NEGATIVE')
    })

    test('Testing polarityCheck() function', () => {
        expect(polarityCheck).toBeDefined();
    })

});