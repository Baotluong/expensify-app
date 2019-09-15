import authReducer from '../../reducers/auth';

test('should update state with login action', () => {
    const uid = 'abc123';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({ uid });
});

test('should update state with logout action', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: '123abc' }, action);
    expect(state).toEqual({});
});