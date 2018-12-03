const state = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const getValue = (key) => {
  return state[key];
};

export {
  getValue,
};

