type Tensor<T> = T[];

export function len<T>(t: Tensor<T>): number {
  return t.length;
}

export function rank<T>(t: Tensor<T>, acc = 1): number {
  if (isScalar(t[0])) {
    return acc;
  }
  return rank(t[0] as Tensor<T>, acc + 1);
}

function isScalar(el: any): boolean {
  // return typeof el === 'number' || typeof el === 'string' || el == null;
  return !Array.isArray(el);
}
