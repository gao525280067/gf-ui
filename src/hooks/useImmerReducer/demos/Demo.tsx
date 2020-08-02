import React from 'react';
import { useImmerReducer } from 'gf-react-ui';
import reducer, { initialState } from './reducer';

const Demo = () => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  // const [state, dispatch] = useImmerReducer(reducer, initialState, (initialState: number) => ({
  //   count: 1000,
  // }));
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
};

export default Demo;
