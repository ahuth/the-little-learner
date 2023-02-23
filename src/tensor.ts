type Scalar = number;
type Tensor<T> = T[];

/**
 * Get the element at an index.
 */
export function at<T>(t: Tensor<T>, index: number): T {
  return t[index];
}

/**
 * How many elements are in a tensor.
 */
export function len(t: Tensor<any>): number {
  return t.length;
}

/**
 * How deeply nested a tensor is.
 * @example
 * rank(9) // => 0
 * rank([9]) // => 1
 * rank([[9]]) // => 2
 */
export function rank(t: Scalar | Tensor<any>): number {
  // We could count the levels of nesting ourselves. But it turns out the rank is the same as the
  // number of elements in a tensor's shape. Makes sense, since in both cases we're sort of
  // descending down each level of nesting.
  return shape(t).length;
}

/**
 * Number of elements at each level of nesting in a tensor.
 * @example
 * shape(9) // => []
 * shape([9]) // => [1]
 * shape([9, 8]) // => [2]
 * shape ([[9, 8], [7 6]]) // => [2, 2]
 * shape([[[5], [6], [7]]]) // => [1, 3, 1]
 */
export function shape(t: Scalar | Tensor<any>, acc: number[] = []): number[] {
  if (isScalar(t)) {
    return acc;
  }
  return shape(at(t, 0), [...acc, len(t)]);
}

function isScalar(el: any): el is Scalar {
  return typeof el === 'number';
}
