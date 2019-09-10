const selectTotalExpenses = (expenses) => {
    if (!expenses){
        return 0;
    }
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0);
};

export default selectTotalExpenses;