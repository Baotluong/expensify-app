import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

const id = '123abc';

const standardObject = {
    description: 'description',
    note: 'note',
    amount: 100,
    createdAt: 999
};

test('should create an ADD_EXPENSE action from object', () => {
    const result = addExpense(standardObject);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...standardObject,
            id: expect.any(String),
        }
    });
});

test('should create an ADD_EXPENSE action without object', () => {
    const result = addExpense();
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
        },
    });
})

test('should create a REMOVE_EXPENSE action from object', () => {
    const result = removeExpense({ id });
    expect(result).toEqual({
        type: 'REMOVE_EXPENSE',
        id
    });
});

test('should create an EDIT_EXPENSE action from object', () => {
    const result = editExpense(id, standardObject);
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates: standardObject,
    });
});

