const add = (a, b) => {
    return a + b;
};

const getGreeting = (name) => `Hello ${name}`;

test('it should add two numbers together', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('it should greet me', () => {
    const result = getGreeting('Bao');
    expect(result).toBe('Hello Bao');
});

