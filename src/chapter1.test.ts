import {line} from './line';

test('What is ((line 8) 4 6)', () => {
  expect(line(8)(4, 6)).toEqual(38);
});
