import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

class AddExpensePage extends Component {
  onSubmit = expense => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

// const AddExpensePage = props =>
//   <div>
//     <h1>Add Expense</h1>
//     <ExpenseForm
//       onSubmit={expense => {
//         props.dispatch(startAddExpense(expense));
//         props.history.push('/');
//         console.log(expense);
//       }}
//     />
//   </div>;
