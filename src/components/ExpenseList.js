import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = props =>
  <div>
    <h1>Expense List</h1>
    {props.expenses.length}
    {props.expenses.map(expense =>
      <ExpenseListItem {...expense} key={expense.id} />
    )}
    {/* {props.expenses.map(expense =>
      <ExpenseListItem
        description={expense.description}
        amount={expense.amount}
        createdAt={expense.createdAt}
      />
    )} */}
  </div>;

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

// const mapStateToProps = state => {
//   return {
//     expenses: state.expenses,
//     filters: state.filters
//   };
// };

export default connect(mapStateToProps)(ExpenseList);
