import {sum1} from './tensor';

test('(sum1 [10 12 14)', () => {
  expect(sum1([10, 12, 14])).toEqual(36);
});
