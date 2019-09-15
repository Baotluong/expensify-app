import { login, logout } from '../../actions/auth';

test('should handle set up log object', () => {
    const action = login('123abc');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123abc'
    });
});

test('should set logout object', () => {
    const action = logout();
    expect(action).toEqual({ type: 'LOGOUT' });
});
