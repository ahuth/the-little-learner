type Scalar = number;
type Tensor<T> = T[];

export function at<T>(t: Tensor<T>, index: number): T {
  return t[index];
}

export function len(t: Tensor<any>): number {
  return t.length;
}

export function rank(t: Scalar | Tensor<any>, acc = 0): number {
  if (isScalar(t)) {
    return acc;
  }
  return rank(at(t, 0), acc + 1);
}

export function shape(t: Scalar | Tensor<any>, acc: number[] = []): number[] {
  if (isScalar(t)) {
    return acc;
  }
  return shape(at(t, 0), [...acc, len(t)]);
}

function isScalar(el: any): el is Scalar {
  return typeof el === 'number';
}
