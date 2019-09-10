import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters';
import ExpensesSummary from '../components/ExpensesSummary';

const ExpenseDashBoardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashBoardPage;