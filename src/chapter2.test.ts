import {len, rank, shape} from './tensor';

test('len [17 12 91 67]', () => {
  expect(len([17, 12, 91, 67])).toEqual(4);
});

test('len [[3 2 8] [7 1 9]]', () => {
  expect(len([[3, 2, 8], [7, 1, 9]])).toEqual(2);
});

test('rank 8', () => {
  expect(rank(8)).toEqual(0);
});

test('rank [[[8 9] [4 7]]]', () => {
  expect(rank([[[8, 9], [4, 7]]])).toEqual(3);
});

test('shape [[5.2 6.3 8.0] [6.9 7.1 0.5]]', () => {
  expect(shape([[5.2, 6.3, 8.0], [6.9, 7.1, 0.5]])).toEqual([2, 3]);
});

test('shape [[[5] [6] [8]] [[7] [9] [5]]]', () => {
  expect(shape([[[5], [6], [8]], [[7], [9], [5]]])).toEqual([2, 3, 1]);
});

test('shape 9', () => {
  expect(shape(9)).toEqual([]);
});
