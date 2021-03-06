import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if there are no expenses', () => {
    expect(selectExpensesTotal()).toBe(0);
});

test('should total a single expense', () => {
    expect(selectExpensesTotal([expenses[0]])).toBe(195);
});

test('should total multiple expenses', () => {
    expect(selectExpensesTotal(expenses)).toBe(114195);
});