type Scalar = number;

/**
 * A Tensor seems to be a list that can hold either scalars or other tensors. Each element in it
 * has to be the same kind of thing. For example, all have to be scalars, or all have to be tensors
 * with 1 scalar each, or all have to be tensors with 5 scalars, or all have to be tensors with 3
 * tensors that each have 7 tensors that each have 5 scalars, etc.
 */
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
export function shape(t: Scalar | Tensor<any>): number[] {
  function shaped(t: Scalar | Tensor<any>, acc: number[]): number[] {
    if (isScalar(t)) {
      return acc;
    }
    return shaped(at(t, 0), [...acc, len(t)]);
  }
  return shaped(t, []);
}

/**
 * Sum together the elements of a rank 1 tensor (which is a tensor containing scalar values).
 */
export function sum1(t: Tensor<number>) {
  function summed(t: Tensor<number>, index: number, acc: number): number {
    if (index === 0) {
      return acc + t[0];
    }
    return summed(t, index - 1, acc + t[index]);
  }

  return summed(t, len(t) - 1, 0);
}

function isScalar(el: any): el is Scalar {
  return typeof el === 'number';
}
