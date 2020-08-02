import { Draft } from 'immer';

export const initialState = { count: 0 };

function reducer(draft: Draft<any>, action: any) {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return void draft.count++;
    case 'decrement':
      return void draft.count--;
  }
}

export default reducer;
