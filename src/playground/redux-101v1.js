import { createStore } from 'redux';

// Action generators - functions that return action objects

// const add = ({ a, b }, c) => {
//   return a + b + c;
// };
//
// console.log(add({ a: 1, b: 12 }, 100));

// const incrementCount = (payload = {}) => ({
//   type: 'INCREMENT',
//   incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({ type: 'SET', count });

const resetCount = () => ({ type: 'RESET' });

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // const incrementBy =
      //   typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      // const decrementBy =
      //   typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//Actions - an object that gets sent to the store

// Increment the count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

//unsubscribe();

// store.dispatch({
//   type: 'INCREMENT'
// });

store.dispatch(incrementCount());

// reset the count to zero
// store.dispatch({
//   type: 'RESET'
// });
store.dispatch(resetCount());

store.dispatch(decrementCount());

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });

store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
//   type: 'SET',
//   count: 101
// });
store.dispatch(setCount({ count: 101 }));

// reset the count to zero

//console.log(store.getState());
