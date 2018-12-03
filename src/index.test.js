import { getValue } from './index';

test('will get value', () => {
  expect(getValue('a')).toBe(1);
});
