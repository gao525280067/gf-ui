import React from 'react';
import produce, { Draft } from 'immer';

interface useImmerState<T = any> {
  (initialValue: T | (() => T)): [T, (f: (draft: Draft<T>) => void | T) => void];
}

const useImmerState: useImmerState = initialValue => {
  const [state, setState] = React.useState(initialValue);

  /**
   *  setState(prev => {
   *    return produce(prev, updater);
   *  })
   *  另一种用法
   *  setState(produce(updater))
   *  produce(updater)会返回一个函数producer, producer(currentState)
   *  SetStateAction<S> = S | ((prevState: S) => S);
   *  setState将producer函数作为参数传入，更新了状态
   *  const producer: <Base extends any>(base: Base) => Base
   *  producer = produce(updater)
   *  produce是一个高阶函数返回的是一个函数，而不是结果
   */

  const updateState = React.useCallback(updater => setState(produce(updater)), []);

  return [state, updateState];
};

export default useImmerState;
