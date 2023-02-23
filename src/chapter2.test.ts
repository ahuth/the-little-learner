import {len, rank} from './tensor';

test('len [17 12 91 67]', () => {
  expect(len([17, 12, 91, 67])).toEqual(4);
});

test('len [[3 2 8] [7 1 9]]', () => {
  expect(len([[3, 2, 8], [7, 1, 9]])).toEqual(2);
});

test('rank [[[8 9] [4 7]]]', () => {
  expect(rank([[[8, 9], [4, 7]]])).toEqual(3);
});
