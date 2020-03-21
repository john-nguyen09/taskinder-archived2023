import { TimeParser } from '../../resources/js/modules/timeParser';
import expect from 'expect';

describe('timeParser', () => {

    const testCases = [
        {
            input: ' 5 h ',
            expected: {hours: 5, minutes: 0},
        },
        {
            input: ' 5h ',
            expected: {hours: 5, minutes: 0},
        },
        {
            input: ' 5h56m ',
            expected: {hours: 5, minutes: 56},
        },
        {
            input: '5.5',
            expected: {hours: 5, minutes: 30},
        },
        {
            input: '5.5h 25m',
            expected: {hours: 5, minutes: 55},
        },
    ];

    it('parse time', () => {
        for (const testCase of testCases) {
            const parser = new TimeParser();
            expect(parser.parse(testCase.input)).toEqual(testCase.expected);
        }
    });
});