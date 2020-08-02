import React from 'react';
import reducer, { initialState } from './redux/reducer';
import { useImmerReducer } from 'gf-react-ui';
import Redux from './redux';

export const CTX = React.createContext<any>(null);

const Demo = () => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  return (
    // 下面所有的组件都可以使用这个state和dispatch, 实现了redux的功能，注意要使用memo和useMemo优化性能
    // 如果使用容器组件可以不需要这样用，只在一个父组件用state即可
    <CTX.Provider value={{ state, dispatch }}>
      <Redux />
    </CTX.Provider>
  );
};

export default Demo;
