import React from 'react';
import { currying } from 'gf-react-ui';

const add = (a: number, b: number, c: number) => {
  return a + b + c;
};

const Demo = () => {
  return (
    <ul>
      <li>{currying(add)(1)(2)(3)}</li>
      <li>{currying(add, 1)(1)(2)}</li>
      <li>{currying(add, 1, 2)(1)}</li>
      <li>{currying(add, 1, 2, 5)}</li>
    </ul>
  );
};

export default Demo;
