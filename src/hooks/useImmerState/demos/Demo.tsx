import React from 'react';
import { useImmerState } from 'gf-react-ui';

const Demo = () => {
  const [state, updateState] = useImmerState({
    a: 1,
    b: 2,
  });

  React.useEffect(() => {
    const clearHandle = setInterval(() => {
      updateState(draft => {
        if (draft.a > 30) {
          clearInterval(clearHandle);
        }
        draft.a++;
        draft.b--;
      });
    }, 1000);

    return () => {
      clearInterval(clearHandle);
    };
  }, []);

  return (
    <>
      <li>{state.a}</li>
      <li>{state.b}</li>
    </>
  );
};

export default Demo;
