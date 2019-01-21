import React from 'react';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt }) =>
  <div>
    <Link to={`/edit/${id}`}>
      <h3>
        {description}
      </h3>
    </Link>

    <p>
      {amount} - {createdAt}
    </p>
  </div>;

export default ExpenseListItem;
//export default connect()(ExpenseListItem);

// const ExpenseListItem = props =>
//   <div>
//     <h3>
//       {props.description}
//     </h3>
//     <p>
//       {props.amount} - {props.createdAt}
//     </p>
//   </div>;

// const mapStateToProps = state => {
//   return {
//     expenses: state.expenses
//   };
// };

//export default connect(mapStateToProps)(ExpenseListItem);
// export default ExpenseListItem;
