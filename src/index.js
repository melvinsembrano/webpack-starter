import React from 'react';
import './index.scss';

const state = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

window.console.log(React.Component, state);

const { a, ...rest } = state;

window.console.log('a is ', a);
window.console.log('the rest are ', rest);
