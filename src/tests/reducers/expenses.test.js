import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


const edittedExpense = expenses[0];
edittedExpense.description = 'new description';
edittedExpense.note = 'new note';
edittedExpense.amount += 1000;
edittedExpense.createdAt += 1000;

test('should set up default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add expense', () => {
    const expense = {
        id: '4',
        description: 'Test',
        note: 'Test Note',
        amount: 999,
        createdAt: 9999
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses, expense ]);
});

test('should remove an expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit expense if id found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates:edittedExpense,
    };
    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual(edittedExpense);
});

test('should not edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates:edittedExpense,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});