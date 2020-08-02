import React from 'react';
import { CTX } from '../Demo1';
import { add, remove } from './actions';

const Redux = () => {
  const { state, dispatch } = React.useContext(CTX);

  // 无用的demo，能看懂即可
  return (
    <>
      <button onClick={() => dispatch(add(1))}>加一个</button>
      <button onClick={() => dispatch(remove(1))}>减一个</button>
      <ul>
        {state.todos.map((_: number, index: number) => (
          <li key={index}>{_}</li>
        ))}
      </ul>
    </>
  );
};

export default Redux;
