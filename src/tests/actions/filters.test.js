import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
import { end } from 'worker-farm';

test('should return SET_TEXT_FILTER action object with text', () => {
    const text = 'test';
    const result = setTextFilter(text);
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text,
    });
});

test('should return SET_TEXT_FILTER action object with default', () => {
    const result = setTextFilter();
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: '',
    });
});

test('should return SORT_BY_DATE action object', () => {
    const result = sortByDate();
    expect(result).toEqual({ type: 'SORT_BY_DATE' });
});

test('should return SORT_BY_AMOUNT action object', () => {
    const result = sortByAmount();
    expect(result).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should return SET_START_DATE action object with startDate', () => {
    const startDate = 100;
    const result = setStartDate(startDate);
    expect(result).toEqual({
        type: 'SET_START_DATE',
        startDate,
    });
});

test('should return SET_END_DATE action object with endDate', () => {
    const endDate = 100;
    const result = setEndDate(endDate);
    expect(result).toEqual({
        type: 'SET_END_DATE',
        endDate,
    });
});