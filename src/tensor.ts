type Scalar = number;
type Tensor<T> = T[];

export function at<T>(t: Tensor<T>, index: number): T {
  return t[index];
}

export function len<T>(t: Tensor<T>): number {
  return t.length;
}

export function rank(t: Scalar | Tensor<any>, acc = 0): number {
  if (isScalar(t)) {
    return acc;
  }
  return rank(at(t, 0), acc + 1);
}

function isScalar(el: any): el is Scalar {
  return typeof el === 'number';
}
