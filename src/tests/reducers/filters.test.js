import filtersReducer from '../../reducers/filters';
import moment from 'moment';
import filters from '../../reducers/filters';

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
};
  
test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(filtersReducerDefaultState);
});

test('should set SortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set SortBy to date', () => {
    const currentState = filtersReducerDefaultState;
    currentState.sortBy='amount';
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const testText = 'moo';
    const action = {
        type: 'SET_TEXT_FILTER',
        text: testText
    };
    const state = filtersReducer(filtersReducerDefaultState, action);
    expect(state.text).toBe(testText);
});

test('should set startDate', () => {
    const testStateDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate: testStateDate,
    };
    const state = filtersReducer(filtersReducerDefaultState, action);
    expect(state.startDate).toBe(testStateDate);
});

test('should set endDate', () => {
    const testEndDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate: testEndDate,
    };
    const state = filtersReducer(filtersReducerDefaultState, action);
    expect(state.endDate).toBe(testEndDate);
});

test('should return same state', () => {
    const action = {
        type: 'NOT_A_REAL_ACTION'
    };
    const state = filtersReducer(filtersReducerDefaultState, action);
    expect(state).toEqual(filtersReducerDefaultState);
});