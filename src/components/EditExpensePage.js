import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';

class EditExpensePage extends Component {
  onSubmit = expense => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        Editing the expense with id of {this.props.match.params.id}
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps, { editExpense, startRemoveExpense })(
  EditExpensePage
);

// const EditExpensePage = props => {
//   console.log(props);
//   return (
//     <div>
//       Editing the expense with id of {props.match.params.id}
//       <ExpenseForm
//         expense={props.expense}
//         onSubmit={expense => {
//           props.dispatch(editExpense(props.match.params.id, expense));
//           props.history.push('/');
//           console.log('updated', expense);
//         }}
//       />
//       <button
//         onClick={() => {
//           props.dispatch(removeExpense({ id: props.expense.id }));
//           props.history.push('/');
//         }}
//       >
//         Remove
//       </button>
//     </div>
//   );
// };
