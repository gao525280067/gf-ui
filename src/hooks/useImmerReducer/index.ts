import React, { useReducer, useMemo, Dispatch } from 'react';
import produce, { Draft } from 'immer';

export interface Reducer<T = any, S = any> {
  (draftState: Draft<T>, action: S): void | T;
}

export interface useImmerReducer<T = any, S = any> {
  (reducer: Reducer<T, S>, initialState: T, initialAction?: (initial: any) => T): [T, Dispatch<S>];
}

const useImmerReducer: useImmerReducer = (reducer, initialState, initialAction) => {
  const cachedReducer = useMemo(() => produce(reducer), [reducer]);
  return useReducer(cachedReducer, initialState as any, initialAction as any);
};

export default useImmerReducer;
